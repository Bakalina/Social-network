import React, {FC} from "react";
import style from './Dialogs.module.css';
import MessageItems from "./Message/Message";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../utils/validators/validators";
import DialogItem from "./DialogItem/DialogItem";
import {InitialStateType} from "../../Redux/dialogsReducer";


const maxLength10 = maxLengthCreator(20);

type MessageFormValuesType = {
    addMessage: string
}
type PropsType = {}


const AddMessageForm: FC<InjectedFormProps<MessageFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <div>
            <h4>Message</h4>
            <Form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'addMessage'} 
                        component={Textarea}
                        placeholder={'New Message'}
                        validate={[required, maxLength10]} />
                </div>
                <div>
                    <button>Add message</button>
                </div>
            </Form>
        </div>
    );
};

const AddMessageReduxForm = reduxForm<MessageFormValuesType, PropsType>({form: 'addMessage'})(AddMessageForm);

type OwnPropsType = {
    messagePage: InitialStateType,
    onSendMessage: (addMessage: string) => void
}

const Dialogs: FC<OwnPropsType> = (props) => {

    const dialogsElement = props.messagePage.dialogsData
        .map((el) => (<DialogItem key={el.id} name={el.name} id={el.id}/>));

    const messageElement = props.messagePage.messageData
        .map((el) => (<MessageItems key={el.id} message={el.message}/>));

    const onSubmit = (formData: MessageFormValuesType) => {
        props.onSendMessage(formData.addMessage);
    };

    return (
        <div className={style.container}>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsElement}
                </div>
                <div className={style.messages}>
                    {messageElement}
                </div>
            </div>
            <AddMessageReduxForm onSubmit={onSubmit}/>
        </div>

    );
};

export default Dialogs;
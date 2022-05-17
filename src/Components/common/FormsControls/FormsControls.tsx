import React, {FC} from "react";
import style from './FormsControls.module.css';
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../utils/validators/validators";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps,
    children: React.ReactNode
}

const FormControl: FC<FormControlPropsType> = ({meta, children}) => {
    const showError = meta.touched && meta.error;

    return (
        <div className={style.formControl + ' ' + (showError && style.error)}>
            <div>
                {children}
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>;
};

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>;
};


export const createField = (placeholder: string,
    name: string, validators: FieldValidatorType[] ,
    component: string | React.FC, props = {}, text: string = '') => {
    return <div>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}/> {text}
    </div>;
};
import React from "react";
import style from './FormsControls.module.css';
import {Field} from "redux-form";

const FormControl = ({meta, children}) => {
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

export const Textarea = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>;
};

export const Input = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>;
};

export const createField = (placeholder, name, validators, component, props = {}, text = '') => {
    return <div>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}/> {text}
    </div>;
};
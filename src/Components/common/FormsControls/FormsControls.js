import React from "react";
import style from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error;

    return (
        <div className={style.formControl + ' ' + (showError && style.error)}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}
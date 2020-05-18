import React from 'react';
import a from './FormsControl.module.css';


export const Input= ({input, meta, ...props})=> {
    const hasError = meta.touched && meta.error;
    return (
        <div className={a.inputForm + " " + (hasError ? a.error: "")}>
            <input {...input} {...props}/>
            <div  className={a.spanError}>
            {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
};

import React from 'react';

export default function validateInfo (values)  {
    let errors = {};

    if(!values.username.trim()) {
        errors.username = 'Username required'
    }
    //emial
    if(!values.email) {
        errors.email = 'Email required'
    }else if (!/^[A-Za-z]+/.test(values.email)) {
        errors.email = 'Email address is invalid'
    }
    if(!values.password) {
        errors.password = 'Password is required';
    }else if(values.password.length < 6) {
        errors.password = 'Password must be 6 charcters or more'
    }

    if(!values.password2) {
        errors.password2 = 'Password is required'
    } else if(values.password2 !== values.password) {
        errors.password2 = 'Passwords error'
    } 
    return errors;

}



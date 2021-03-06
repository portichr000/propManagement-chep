import axios from 'axios';

import { ROOT_URL } from '../config';

import {
    AUTHENTICATE_USER
}from './types';

export function signUp(fields, success) {
    // var newFields = {
    //     admin: true
    // }
    // newFields = {
    //     ...fields,
    //     ...newFields
    // }
    
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, fields)
            .then(response => {
                dispatch({
                    type: AUTHENTICATE_USER,
                    payload: response.data
                })
                const { token } = response.data;
                window.localStorage.setItem('token', token);
                success();
            })
            .catch(err => {
                if(err) {console.log(err)}
            })
        }
 }

export function signIn(fields, success) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`, fields)
        .then(response => {
            const { token } = response.data;
             window.localStorage.setItem('token', token);
                dispatch({
                    type: AUTHENTICATE_USER,
                    payload: response.data
                })
                success();
        })
        .catch(err => {
            if(err) { console.log(err) }
        })
    }
}
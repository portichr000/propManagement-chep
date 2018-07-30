import React, { Component } from 'react';

import NewNewsletterForm from "../newsletter/newsletterNewForm";

class NewNewsletter extends Component {

    onSubmit = (fields) => {
        // if(button == 'submit') {
        //     //save new newsletter post request 
        //     console.log('trying to handle submit backend');
        // }

        //this.props.history.push('./dashboard');
        this.props.history.push('/dashboard');
    }

    onCancel = () => {
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className='new-request'>
                <NewNewsletterForm 
                onCancel={() => this.onCancel()}
                onSubmit={(event) => this.onSubmit(event)}
                formTitle='New Request'
                fieldOnePlaceholder='Newsletter Title'
                fieldOneTitle='Newsletter Title'
                fieldTwoPlaceholder='Body Here'
                fieldTwoTitle='Body'
            />
            </div>
        )
    }
}

export default NewNewsletter;

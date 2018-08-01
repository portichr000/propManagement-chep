import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions'


import NewNewsletterForm from "../newsletter/newsletterNewForm";

class NewNewsletter extends Component {

    onSubmit = (fields) => {
        const { title, body, image } = fields;
        
        var formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('image',image);
        
        this.props.createNewNewsletter(formData, () => {
            this.props.history.push('/dashboard');
        })
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

NewNewsletter = connect(null, actions)(NewNewsletter);

export default NewNewsletter;

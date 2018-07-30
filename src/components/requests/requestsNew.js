import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from "../newsletter/newsletterNewForm";

class NewRequest extends Component {

    onSubmit = fields => {
        // if(button == 'submit') {
        //     //save new newsletter post request 
        //     console.log('trying to handle submit backend');
        // }

        //this.props.history.push('./dashboard');
        this.props.createNewRequest(this.props._id,{}, () => {
            this.props.history.push('/dashboard');
        })
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
                    formTitle='New Service Request'
                    fieldOnePlaceholder='Service Request Title'
                    fieldOneTitle='Service Request Title'
                    fieldTwoPlaceholder='Description Here'
                    fieldTwoTitle='Description'
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { _id } = state.auth.user;
    return{ _id }
}

NewRequest = connect(mapStateToProps, actions)(NewRequest);

export default NewRequest;

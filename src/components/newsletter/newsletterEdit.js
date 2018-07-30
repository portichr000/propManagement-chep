import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';


import NewNewsletterForm from './newsletterNewForm';

class EditNewsletter extends Component {
    onSubmit = (fields) => {
        // if(button == 'submit') {
        //     //save new newsletter post request 
        //     console.log('trying to handle submit backend');
        // }

        //this.props.history.push('./dashboard');
        this.props.history.push('/dashboard');
    };

    onCancel = () => {
        this.props.history.push('/dashboard');
    };

    componentDidMount() {
        this.props.fetchNewsletterWithId(this.props.match.params.id);
    }

    render() {
        return (
            <div className='new-newsletter'>
                <NewNewsletterForm 
                    newsletterToEdit={this.props.newsletterToEdit}
                    onCancel={() => this.onCancel()} 
                    onSubmit={(event) => this.onSubmit(event)}
                    formTitle='Edit Newsletter'
                    fieldOneTitle='Newsletter Title'
                    fieldTwoTitle='Newsletter Body'
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { newsletterToEdit } = state.newsletters;
    return {
        newsletterToEdit
    }
}

export default connect(mapStateToProps, actions)(EditNewsletter);

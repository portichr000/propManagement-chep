import React, { Component } from 'react';

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
        //this.props.fetchNewsletterWithId()
        console.log(this.props.match.params.id);
    }

    render() {
        return (
            <div className='new-newsletter'>
                <NewNewsletterForm 
                    onCancel={() => this.onCancel()} 
                    onSubmit={(event) => this.onSubmit(event)}
                    title='Edit Newsletter'
                />
            </div>
        )
    }
}

export default EditNewsletter;

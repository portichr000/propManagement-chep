import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewsletterBox from './newsletterBox';
import NewsletterLatest from './newsletterLatest';

import { FormTitle } from '../formTitle';

class NewsletterDetail extends Component {

    componentDidMount() {
        this.props.fetchNewsletterWithId(this.props.match.params.id);
    }

    render() {
        console.log(this.props.newsletterToEdit);
        return (
            <div className='newsletter-detail'>
                <FormTitle className='newsletter-detail__title' text='Newsletter Detail'/>
                <NewsletterBox date={this.props.newsletterToEdit.date}/>
                <NewsletterLatest {...this.props.newsletterToEdit}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { newsletterToEdit } = state.newsletters
    return { newsletterToEdit };
}

export default connect(mapStateToProps, actions)(NewsletterDetail);

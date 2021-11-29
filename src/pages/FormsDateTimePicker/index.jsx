/**
 * External Dependencies
 */
import React, { Component } from 'react';

/**
 * Internal Dependencies
 */
import AsyncComponent from '../../components/async-component';
import PageWrap from '../../components/page-wrap';
import PageTitle from '../../components/page-title';
import PageContent from '../../components/page-content';

/**
 * Component
 */
class FormsDateTimePickerPage extends Component {
    render() {
        return (
            <PageWrap>
                <PageTitle
                    breadcrumbs={ {
                        '/': 'Home',
                        '#': 'Forms',
                        '/forms-datetime': {
                            title: 'Advanced',
                            sub: 'forms_advanced',
                        },
                    } }
                >
                    <h1>Forms Date Picker</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#dateTimePicker',
                            title: 'DateTime',
                        }, {
                            to: '#datePicker',
                            title: 'Date',
                        }, {
                            to: '#timePicker',
                            title: 'Time',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default FormsDateTimePickerPage;

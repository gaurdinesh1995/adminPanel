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
class FormsBasePage extends Component {
    render() {
        return (
            <PageWrap>
                <PageTitle
                    breadcrumbs={ {
                        '/': 'Home',
                        '#': 'Forms',
                    } }
                >
                    <h1>Forms Base</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#formsBase',
                            title: 'Base',
                        }, {
                            to: '#formsGrid',
                            title: 'Form Grid',
                        }, {
                            to: '#formCheckboxesAndRadios',
                            title: 'Checkboxes and Radios',
                            sub: [
                                {
                                    to: '#formCheckboxesAndRadios',
                                    title: 'Checkboxes',
                                }, {
                                    to: '#formRadios',
                                    title: 'Radios',
                                }, {
                                    to: '#formCheckboxesAndRadiosDisabled',
                                    title: 'Disabled',
                                },
                            ],
                        }, {
                            to: '#formSwitches',
                            title: 'Switches',
                        }, {
                            to: '#formSelect',
                            title: 'Select',
                        }, {
                            to: '#formRange',
                            title: 'Range',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default FormsBasePage;

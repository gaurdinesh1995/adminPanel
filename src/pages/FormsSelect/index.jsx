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
class FormsSelectPage extends Component {
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
                    <h1>Forms Select</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#selectBase',
                            title: 'Range',
                        }, {
                            to: '#selectMulti',
                            title: 'Multi',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default FormsSelectPage;

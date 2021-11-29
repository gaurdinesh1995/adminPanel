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
class ComponentAlertPage extends Component {
    render() {
        return (
            <PageWrap>
                <PageTitle
                    breadcrumbs={ {
                        '/': 'Home',
                        '#': 'Components',
                        '/component-alert/': {
                            title: 'Base',
                            sub: 'components_base',
                        },
                    } }
                >
                    <h1>Alert</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#alertBase',
                            title: 'Base',
                        }, {
                            to: '#alertLink',
                            title: 'Link',
                        }, {
                            to: '#alertContent',
                            title: 'Content',
                        }, {
                            to: '#alertDismissible',
                            title: 'Dismissible',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default ComponentAlertPage;

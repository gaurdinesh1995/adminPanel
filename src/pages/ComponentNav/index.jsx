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
class ComponentNavPage extends Component {
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
                    <h1>Nav</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#navBase',
                            title: 'Base',
                        }, {
                            to: '#navIcon',
                            title: 'Icon',
                        }, {
                            to: '#navVertical',
                            title: 'Vertical',
                        }, {
                            to: '#navTabs',
                            title: 'Tabs',
                        }, {
                            to: '#navPills',
                            title: 'Pills',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default ComponentNavPage;

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
class ComponentChartsPeityPage extends Component {
    render() {
        return (
            <PageWrap>
                <PageTitle
                    breadcrumbs={ {
                        '/': 'Home',
                        '#': 'Components',
                        '/component-icons-feather': {
                            title: 'Advanced',
                            sub: 'components_advanced',
                        },
                    } }
                >
                    <h1>Chats: Peity</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#chartLine',
                            title: 'Line',
                        }, {
                            to: '#chartBar',
                            title: 'Bar',
                        }, {
                            to: '#chartPie',
                            title: 'Pie',
                        }, {
                            to: '#chartUpdating',
                            title: 'Updating',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default ComponentChartsPeityPage;

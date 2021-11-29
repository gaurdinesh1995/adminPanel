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
class ComponentChartsChartistPage extends Component {
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
                    <h1>Chats: Chartist</h1>
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
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default ComponentChartsChartistPage;

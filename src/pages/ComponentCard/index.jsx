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
class ComponentCardPage extends Component {
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
                    <h1>Card</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#cardBase',
                            title: 'Base',
                        }, {
                            to: '#cardCollapse',
                            title: 'Collapse',
                        }, {
                            to: '#cardBody',
                            title: 'Body',
                        }, {
                            to: '#cardTitles',
                            title: 'Titles, text, and links',
                        }, {
                            to: '#cardList',
                            title: 'List group',
                        }, {
                            to: '#cardKitchen',
                            title: 'Kitchen sink',
                        }, {
                            to: '#cardHeader',
                            title: 'Header and Footer',
                        }, {
                            to: '#cardSizing',
                            title: 'Sizing',
                        }, {
                            to: '#cardAlignment',
                            title: 'Text alignment',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default ComponentCardPage;

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
class ComponentBadgePage extends Component {
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
                    <h1>Badge</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#badgeBase',
                            title: 'Base',
                        }, {
                            to: '#badgeContext',
                            title: 'Contextual variations',
                        }, {
                            to: '#badgePill',
                            title: 'Pills',
                        }, {
                            to: '#badgeLink',
                            title: 'Links',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default ComponentBadgePage;

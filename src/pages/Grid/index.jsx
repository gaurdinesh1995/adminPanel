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
class GridPage extends Component {
    render() {
        return (
            <PageWrap>
                <PageTitle
                    breadcrumbs={ {
                        '/': 'Home',
                        '/grid': {
                            title: 'Content',
                            sub: 'content',
                        },
                    } }
                >
                    <h1>Grid</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#gridBase',
                            title: 'Base',
                        }, {
                            to: '#gridVerticalGap',
                            title: 'Vertical Gap',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default GridPage;

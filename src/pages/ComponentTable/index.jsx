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
class ComponentTablePage extends Component {
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
                    <h1>Tables</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#tableBase',
                            title: 'Base',
                        }, {
                            to: '#tableHead',
                            title: 'Table head options',
                        }, {
                            to: '#tableStriped',
                            title: 'Striped rows',
                        }, {
                            to: '#tableBordered',
                            title: 'Bordered table',
                        }, {
                            to: '#tableBorderless',
                            title: 'Borderless table',
                        }, {
                            to: '#tableHover',
                            title: 'Hoverable rows',
                        }, {
                            to: '#tableSmall',
                            title: 'Small table',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default ComponentTablePage;

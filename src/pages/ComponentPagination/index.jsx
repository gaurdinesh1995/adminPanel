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
class ComponentPaginationPage extends Component {
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
                    <h1>Pagination</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#paginationBase',
                            title: 'Base',
                        }, {
                            to: '#paginationDisabledActive',
                            title: 'Disabled and Active',
                        }, {
                            to: '#paginationSizing',
                            title: 'Sizing',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default ComponentPaginationPage;

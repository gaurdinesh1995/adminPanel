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
class ComponentProgressPage extends Component {
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
                    <h1>Progress</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#progressBase',
                            title: 'Base',
                        }, {
                            to: '#progressColors',
                            title: 'Colors',
                        }, {
                            to: '#progressStriped',
                            title: 'Striped',
                        }, {
                            to: '#progressAnimated',
                            title: 'Animated',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default ComponentProgressPage;

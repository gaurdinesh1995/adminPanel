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
class ComponentCarouselPage extends Component {
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
                            to: '#carouselBase',
                            title: 'Base',
                        }, {
                            to: '#carouselIndicators',
                            title: 'Indicators',
                        }, {
                            to: '#carouselCaptions',
                            title: 'Captions',
                        }, {
                            to: '#carouselFade',
                            title: 'Fade',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default ComponentCarouselPage;

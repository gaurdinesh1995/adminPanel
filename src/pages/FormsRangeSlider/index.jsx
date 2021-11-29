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
class FormsRangeSliderPage extends Component {
    render() {
        return (
            <PageWrap>
                <PageTitle
                    breadcrumbs={ {
                        '/': 'Home',
                        '#': 'Forms',
                        '/forms-datetime': {
                            title: 'Advanced',
                            sub: 'forms_advanced',
                        },
                    } }
                >
                    <h1>Forms Range Slider</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#rangeSlider',
                            title: 'Range',
                        }, {
                            to: '#slider',
                            title: 'Slider',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default FormsRangeSliderPage;

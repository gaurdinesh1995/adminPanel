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
class FormsTouchSpinPage extends Component {
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
                    <h1>Forms Touch Spin</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#touchSpinBase',
                            title: 'Base',
                        }, {
                            to: '#touchSpinVertical',
                            title: 'Vertical',
                        }, {
                            to: '#touchSpinOverlay',
                            title: 'Overlay',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default FormsTouchSpinPage;

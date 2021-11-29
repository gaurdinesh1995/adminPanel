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
class ComponentDropdownPage extends Component {
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
                    <h1>Dropdown</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#dropdownBase',
                            title: 'Base',
                        }, {
                            to: '#dropdownHover',
                            title: 'Link',
                        }, {
                            to: '#dropdownDirectionUp',
                            title: 'Direction',
                            sub: [
                                {
                                    to: '#dropdownDirectionUp',
                                    title: 'Up',
                                }, {
                                    to: '#dropdownDirectionRight',
                                    title: 'Right',
                                }, {
                                    to: '#dropdownDirectionLeft',
                                    title: 'Left',
                                },
                            ],
                        }, {
                            to: '#dropdownAlignment',
                            title: 'Menu Alignment',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default ComponentDropdownPage;

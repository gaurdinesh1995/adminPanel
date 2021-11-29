/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
class ComponentMapsPage extends Component {
    render() {
        return (
            <PageWrap>
                <PageTitle
                    breadcrumbs={ {
                        '/': 'Home',
                        '#': 'Components',
                        '/component-icons-feather': {
                            title: 'Advanced',
                            sub: 'components_advanced',
                        },
                    } }
                >
                    <h1>Maps</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#mapsGoogle',
                            title: 'Google Maps',
                        }, {
                            to: '#mapsVectorMap',
                            title: 'Vector Map',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
) )( ComponentMapsPage );

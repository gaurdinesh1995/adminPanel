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
class TypographyPage extends Component {
    render() {
        return (
            <PageWrap>
                <PageTitle
                    breadcrumbs={ {
                        '/': 'Home',
                        '/colors': {
                            title: 'Content',
                            sub: 'content',
                        },
                    } }
                >
                    <h1>Typography</h1>
                </PageTitle>
                <PageContent
                    sideNav={ [
                        {
                            to: '#typographyBase',
                            title: 'Base',
                        }, {
                            to: '#typographyDisplay',
                            title: 'Display',
                        }, {
                            to: '#typographyLead',
                            title: 'Lead',
                        }, {
                            to: '#typographyInline',
                            title: 'Inline text elements',
                        }, {
                            to: '#typographyBlockquotes',
                            title: 'Blockquotes',
                        }, {
                            to: '#typographyBlockquotes2',
                            title: 'Blockquotes 2',
                        },
                    ] }
                >
                    <AsyncComponent component={ () => import( './content' ) } />
                </PageContent>
            </PageWrap>
        );
    }
}

export default TypographyPage;

/**
 * Styles
 */
import './style.scss';

/**
 * External Dependencies
 */
import React, { Component } from 'react';
import classnames from 'classnames/dedupe';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/htmlbars';
import reactElementToJSXString from 'react-element-to-jsx-string';

/**
 * Internal Dependencies
 */
import Tabs from '../tabs';

SyntaxHighlighter.registerLanguage( 'javascript', js );
SyntaxHighlighter.registerLanguage( 'css', css );
SyntaxHighlighter.registerLanguage( 'html', html );

githubGist.hljs.background = 'none';

/**
 * Component
 */
class Snippet extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            activeTab: 'preview',
        };

        this.toggleTab = this.toggleTab.bind( this );
    }

    toggleTab( name ) {
        this.setState( {
            activeTab: name,
        } );
    }

    renderChildren( children, reactRenderOptions ) {
        if ( typeof children === 'string' ) {
            return children;
        }

        if ( Array.isArray( children ) ) {
            let result = '';

            children.forEach( ( innerChildren ) => {
                result += this.renderChildren( innerChildren, reactRenderOptions );
                result += '\n';
            } );

            return result;
        }

        return reactElementToJSXString( children, {
            showDefaultProps: false,
            ...reactRenderOptions,
        } );
    }

    render() {
        const {
            language,
            children,
            codeBefore = false,
            preview = false,
            previewFrame = false,
            filled = false,
            className,
            reactRenderOptions = [],
        } = this.props;

        const {
            activeTab,
        } = this.state;

        const code = [
            <SyntaxHighlighter
                key="children-code"
                language={ language }
                style={ githubGist }
                customStyle={ { padding: '24px 27px' } }
            >
                { this.renderChildren( children, reactRenderOptions ) }
            </SyntaxHighlighter>,
        ];

        if ( codeBefore ) {
            code.unshift(
                <SyntaxHighlighter
                    key="children-before-code"
                    language={ language }
                    style={ githubGist }
                    customStyle={ { padding: '24px 27px' } }
                >
                    { this.renderChildren( codeBefore, reactRenderOptions ) }
                </SyntaxHighlighter>,
            );
        }

        if ( preview ) {
            code.forEach( ( data, k ) => {
                code[ k ] = (
                    <div
                        key={ data.key }
                        className="rui-snippet-html"
                    >
                        { code[ k ] }
                    </div>
                );
            } );
        }

        return (
            preview ? (
                <div className={ classnames( 'rui-snippet', filled ? 'rui-snippet-filled' : '', previewFrame ? 'rui-snippet-frame' : 'rui-snippet-frame-preview', className ) }>
                    <Tabs sliding pills>
                        <Tabs.NavItem
                            isActive={ activeTab === 'preview' }
                            onClick={ () => this.toggleTab( 'preview' ) }
                        >
                            Preview
                        </Tabs.NavItem>
                        <Tabs.NavItem
                            isActive={ activeTab === 'jsx' }
                            onClick={ () => this.toggleTab( 'jsx' ) }
                        >
                            React JSX
                        </Tabs.NavItem>
                    </Tabs>
                    <Tabs.Content activeTab={ activeTab }>
                        <Tabs.Pane tabId="preview">
                            <div className="rui-snippet-preview demo">
                                { children }
                            </div>
                        </Tabs.Pane>
                        <Tabs.Pane tabId="jsx">
                            { code }
                        </Tabs.Pane>
                    </Tabs.Content>
                </div>
            ) : (
                <div className={ classnames( 'rui-snippet-single', filled ? 'rui-snippet-filled' : '', className ) }>
                    { code }
                </div>
            )
        );
    }
}

export default Snippet;

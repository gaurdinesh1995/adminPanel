/**
 * Styles
 */
import 'quill/dist/quill.snow.css';
import './style.scss';

/**
 * External Dependencies
 */
import SimpleMDEReact from 'react-simplemde-editor';
import React, { Component } from 'react';

const $ = window.jQuery;
const $body = $( 'body' );

/**
 * Component
 */
class MarkdownEditor extends Component {
    render() {
        return (
            <SimpleMDEReact
                events={ {
                    optionChange: ( e ) => {
                        if ( e.options.fullScreen ) {
                            $body.addClass( 'rui-markdown-fullscreen' );
                        } else {
                            $body.removeClass( 'rui-markdown-fullscreen' );
                        }
                    },
                } }
                { ...this.props }
            />
        );
    }
}

export default MarkdownEditor;

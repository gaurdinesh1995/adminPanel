/**
 * Styles
 */
import 'quill/dist/quill.snow.css';
import './style.scss';

/**
 * External Dependencies
 */
import Quill from 'react-quill';
import classnames from 'classnames/dedupe';
import React, { Component } from 'react';

/**
 * Internal Dependencies
 */
import Icon from '../icon';

let uid = 1;

/**
 * Component
 */
class TextEditor extends Component {
    constructor( props ) {
        super( props );

        this.uid = uid++;
        this.$toolbar = React.createRef();
    }

    componentDidMount() {
        // move header select icon inside select element.
        const $headerIcon = window.jQuery( `#rui-quill-${ this.uid }-toolbar .ql-formats > .rui-quill-select-icon` );
        $headerIcon.next( 'span.ql-header' ).append( $headerIcon );
    }

    render() {
        const {
            className,
        } = this.props;

        return (
            <div className={ classnames( 'rui-quill', className ) }>
                <div
                    className="rui-quill-toolbar"
                    id={ `rui-quill-${ this.uid }-toolbar` }
                    ref={ this.$toolbar }
                >
                    <div className="ql-formats">
                        <Icon name="chevron-down" className="rui-quill-select-icon" />
                        <select className="ql-header" />
                    </div>
                    <div className="ql-formats">
                        <button className="ql-bold" type="button" />
                        <button className="ql-italic" type="button" />
                        <button className="ql-underline" type="button" />
                        <button className="ql-strike" type="button" />
                    </div>
                    <div className="ql-formats">
                        <button className="ql-clean" type="button" />
                    </div>
                    <div className="ql-formats">
                        <button className="ql-list" value="ordered" type="button" />
                        <button className="ql-list" value="bullet" type="button" />
                    </div>
                    <div className="ql-formats">
                        <button className="ql-link" type="button" />
                    </div>
                </div>
                <div className="rui-quill-editor">
                    <Quill
                        { ...this.props }
                        modules={ {
                            toolbar: {
                                container: `#rui-quill-${ this.uid }-toolbar`,
                            },
                        } }
                    />
                </div>
            </div>
        );
    }
}

export default TextEditor;

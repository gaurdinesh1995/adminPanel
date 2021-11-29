/* eslint-disable react/prop-types */
/**
 * Styles
 */
import './style.scss';

/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/dedupe';
import Dropzone from 'react-dropzone';

/**
 * Internal Dependencies
 */
import Icon from '../icon';
import { fileSizeToHumanReadable } from '../../utils';

/**
 * Component
 */
class ComponentDropzone extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            files: [],
        };

        this.onChange = this.onChange.bind( this );
        this.removeFile = this.removeFile.bind( this );
    }

    onChange() {
        const {
            onChange = () => {},
        } = this.props;

        onChange( this.state.files );
    }

    removeFile( file ) {
        const newFiles = [ ...this.state.files ];

        newFiles.splice( newFiles.indexOf( file ), 1 );

        this.setState( {
            files: newFiles,
        }, this.onChange );
    }

    render() {
        const {
            settings,
        } = this.props;

        return (
            <Dropzone
                onDrop={ ( newFiles ) => {
                    this.setState( {
                        files: [
                            ...this.state.files,
                            ...newFiles,
                        ],
                    }, this.onChange );
                } }
            >
                { ( data ) => {
                    const rootProps = data.getRootProps();
                    const inputProps = data.getInputProps();

                    return (
                        <div
                            className={
                                classnames(
                                    'rui-dropzone',
                                    data.isDragActive ? 'rui-dropzone-is-active' : ''
                                )
                            }
                            { ...rootProps }
                        >
                            <input { ...inputProps } />
                            { this.state.files && this.state.files.length ? (
                                this.state.files.map( ( fileData ) => {
                                    const fileExt = fileData.name.split( '.' ).pop();

                                    return (
                                        <div
                                            key={ fileData.name }
                                            className="rui-dropzone-preview"
                                        >
                                            <div className="rui-dropzone-image">
                                                <img src={ settings.img_file[ fileExt ] || settings.img_file.empty } className="icon-file" alt="" />
                                            </div>
                                            <div className="rui-dropzone-details">
                                                <div className="rui-dropzone-size"><span>{ fileSizeToHumanReadable( fileData.size ) }</span></div>
                                                <div className="rui-dropzone-filename"><span>{ fileData.name }</span></div>
                                            </div>
                                            <button
                                                className="rui-dropzone-remove"
                                                onClick={ ( e ) => {
                                                    e.stopPropagation();
                                                    this.removeFile( fileData );
                                                } }
                                            >
                                                <Icon name="x" />
                                            </button>
                                        </div>
                                    );
                                } )
                            ) : (
                                <div className="rui-dropzone-message">
                                    <span className="rui-dropzone-icon">
                                        <Icon name="upload-cloud" />
                                    </span>
                                    <span className="rui-dropzone-text">
                                        Drop files here or click to upload.
                                    </span>
                                </div>
                            ) }
                        </div>
                    );
                } }
            </Dropzone>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
) )( ComponentDropzone );

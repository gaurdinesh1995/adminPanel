/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import Icon from '../../components/icon';

/**
 * Component
 */
class Content extends Component {
    render() {
        return (
            <Fragment>
                <h2 id="listGroupBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Media } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Media className="media-success">
                        <div className="media-img">S</div>
                        <Media body>
                            <div className="media-title">Media heading</div>
                            <small className="media-subtitle">Media subtitle</small>
                            <Media className="media-warning">
                                <div className="media-img">B</div>
                                <Media body>
                                    <div className="media-title">Media heading</div>
                                    <small className="media-subtitle">Media subtitle</small>
                                </Media>
                            </Media>
                        </Media>
                    </Media>
                    <Media className="media-success">
                        <div className="media-img">S</div>
                        <Media body>
                            <div className="media-title">Media heading</div>
                            <small className="media-subtitle">Media subtitle</small>
                        </Media>
                    </Media>
                </Snippet>

                <div className="rui-gap-4" id="listGroupLink" />
                <h2>Link</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Media } from \'reactstrap\';',
                            'import { Link } from \'react-router-dom\';',
                        ].join( '\n' )
                    }
                >
                    <Link to="#" className="media media-success">
                        <span className="media-img">A</span>
                        <Media body>
                            <div className="media-title">Media heading</div>
                            <small className="media-subtitle">Media subtitle</small>
                        </Media>
                    </Link>
                    <Link to="#" className="media media-warning">
                        <span className="media-img">S</span>
                        <Media body>
                            <div className="media-title">Media heading</div>
                            <small className="media-subtitle">Media subtitle</small>
                        </Media>
                    </Link>
                </Snippet>

                <div className="rui-gap-4" id="listGroupFilled" />
                <h2>Filled</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Media } from \'reactstrap\';',
                            'import { Link } from \'react-router-dom\';',
                            'import Icon from \'../../components/icon\';',
                        ].join( '\n' )
                    }
                >
                    <div className="media media-success media-filled">
                        <Link to="#" className="media-link">
                            <span className="media-img">A</span>
                            <Media body>
                                <div className="media-title">Media heading</div>
                                <small className="media-subtitle">Media subtitle</small>
                            </Media>
                        </Link>
                        <Link to="#" className="media-icon">
                            <Icon name="x" />
                        </Link>
                    </div>
                    <div className="media media-warning media-filled">
                        <Link to="#" className="media-link">
                            <span className="media-img">S</span>
                            <Media body>
                                <div className="media-title">Media heading</div>
                                <small className="media-subtitle">Media subtitle</small>
                            </Media>
                        </Link>
                        <Link to="#" className="media-icon">
                            <Icon name="x" />
                        </Link>
                    </div>
                </Snippet>
            </Fragment>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
) )( Content );

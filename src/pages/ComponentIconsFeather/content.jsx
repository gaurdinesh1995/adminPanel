/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

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
                <p>
                    Full list of Feather icons you can find here <a href="https://feathericons.com/" target="_blank" rel="noopener noreferrer">https://feathericons.com/</a>.
                </p>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Row, Col } from \'reactstrap\';',
                            'import Icon from \'../../components/icon\';',
                        ].join( '\n' )
                    }
                >
                    <Row className="vertical-gap">
                        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
                            <div className="demo-icons">
                                <Icon name="activity" />
                                activity
                            </div>
                        </Col>
                        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
                            <div className="demo-icons">
                                <Icon name="airplay" />
                                airplay
                            </div>
                        </Col>
                        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
                            <div className="demo-icons">
                                <Icon name="alert-circle" />
                                alert-circle
                            </div>
                        </Col>
                        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
                            <div className="demo-icons">
                                <Icon name="alert-octagon" />
                                alert-octagon
                            </div>
                        </Col>
                        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
                            <div className="demo-icons">
                                <Icon name="alert-triangle" />
                                alert-triangle
                            </div>
                        </Col>
                        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
                            <div className="demo-icons">
                                <Icon name="align-center" />
                                align-center
                            </div>
                        </Col>
                    </Row>
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

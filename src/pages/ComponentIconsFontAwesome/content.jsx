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
                    Full list of Font Awesome icons you can find here <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">https://fontawesome.com/</a>.
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
                                <Icon vendor="fa" name="bell" />
                                bell
                            </div>
                        </Col>
                        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
                            <div className="demo-icons">
                                <Icon vendor="fa" name={ [ 'fab', 'react' ] } />
                                react
                            </div>
                        </Col>
                        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
                            <div className="demo-icons">
                                <Icon vendor="fa" name={ [ 'fas', 'bicycle' ] } />
                                bicycle
                            </div>
                        </Col>
                        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
                            <div className="demo-icons">
                                <Icon vendor="fa" name={ [ 'fab', 'apple' ] } />
                                apple
                            </div>
                        </Col>
                        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
                            <div className="demo-icons">
                                <Icon vendor="fa" name={ [ 'far', 'comments' ] } />
                                comments
                            </div>
                        </Col>
                        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
                            <div className="demo-icons">
                                <Icon vendor="fa" name={ [ 'fas', 'award' ] } />
                                award
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

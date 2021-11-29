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

/**
 * Component
 */
class Content extends Component {
    render() {
        return (
            <Fragment>
                <h2 id="gridBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore="import { Row, Col } from 'reactstrap';"
                >
                    <Row className="xs-gap">
                        <Col sm>
                            <div className="bg-grey-1 pt-15 pr-20 pb-15 pl-20 br-4">One of three columns</div>
                        </Col>
                        <Col sm>
                            <div className="bg-grey-1 pt-15 pr-20 pb-15 pl-20 br-4">One of three columns</div>
                        </Col>
                        <Col sm>
                            <div className="bg-grey-1 pt-15 pr-20 pb-15 pl-20 br-4">One of three columns</div>
                        </Col>
                    </Row>
                </Snippet>

                <div className="rui-gap-4" id="gridVerticalGap" />
                <h2>Vertical Gap</h2>
                <p>
                    Use the following classes for customization:
                    <code>.lg-gap</code>
                    { ', ' }
                    <code>.md-gap</code>
                    { ', ' }
                    <code>.sm-gap</code>
                    { ', ' }
                    <code>.xs-gap</code>
                </p>
                <Snippet
                    language="html"
                    preview
                    codeBefore="import { Row, Col } from 'reactstrap';"
                >
                    <Row className="vertical-gap xs-gap">
                        <Col xs={ 12 }>
                            <div className="bg-grey-1 pt-15 pr-20 pb-15 pl-20 br-4">One of three columns</div>
                        </Col>
                        <Col xs={ 12 }>
                            <div className="bg-grey-1 pt-15 pr-20 pb-15 pl-20 br-4">One of three columns</div>
                        </Col>
                        <Col xs={ 12 }>
                            <div className="bg-grey-1 pt-15 pr-20 pb-15 pl-20 br-4">One of three columns</div>
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

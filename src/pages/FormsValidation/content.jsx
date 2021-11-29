/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, CustomInput, Label, Input, FormFeedback } from 'reactstrap';

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
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Row, Col, Button, CustomInput, Label, Input } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <form>
                        <Row className="vertical-gap sm-gap">
                            <Col xs={ 6 }>
                                <Label for="validationCustom01">Your name</Label>
                                <Input type="text" id="validationCustom01" placeholder="Name" invalid onChange={ () => {} } />
                                <FormFeedback>
                                    This value is invalid.
                                </FormFeedback>
                            </Col>
                            <Col xs={ 6 }>
                                <Label for="validationEmail">Your email</Label>
                                <Input type="email" id="validationEmail" aria-describedby="emailHelp" placeholder="Email" value="admin@test.com" valid onChange={ () => {} } />
                                <FormFeedback valid>
                                    This value is valid.
                                </FormFeedback>
                            </Col>
                            <Col xs="auto">
                                <CustomInput type="radio" id="validationMale" label="Male" name="customRadio" invalid onChange={ () => {} } />
                            </Col>
                            <Col xs="auto">
                                <CustomInput type="radio" id="validationFemale" label="Female" name="customRadio" invalid onChange={ () => {} } />
                            </Col>
                            <Col xs={ 12 }>
                                <CustomInput type="select" id="validationSelect" invalid onChange={ () => {} }>
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </CustomInput>
                            </Col>
                            <Col xs={ 12 }>
                                <CustomInput type="checkbox" id="validationCheckbox" label="I have read and agree to the terms and conditions" invalid onChange={ () => {} } />
                                <FormFeedback>
                                    You must agree before submitting.
                                </FormFeedback>
                            </Col>
                            <Col xs={ 12 }>
                                <Button color="brand" type="submit">Submit form</Button>
                            </Col>
                        </Row>
                    </form>
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

/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Col, CustomInput, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Label, Input } from 'reactstrap';

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
                <h2 id="formsBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { FormGroup, InputGroup, InputGroupAddon, InputGroupText, Label, Input } from \'reactstrap\';',
                            'import Icon from \'../../components/icon\';',
                        ].join( '\n' )
                    }
                >
                    <FormGroup>
                        <Label for="emailInput1">Email</Label>
                        <Input type="email" name="email" id="emailInput1" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="emailInput2">Width Icon</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Icon name="at-sign" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input type="email" name="email" id="emailInput2" placeholder="Email" />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup disabled>
                        <Label for="emailInput3">Disabled</Label>
                        <Input type="email" name="email" id="emailInput3" placeholder="Email" disabled />
                    </FormGroup>
                </Snippet>

                <div className="rui-gap-4" id="formsGrid"></div>
                <h2>Form Grid</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Col, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Label, Input } from \'reactstrap\';',
                            'import Icon from \'../../components/icon\';',
                        ].join( '\n' )
                    }
                >
                    <FormGroup row>
                        <Label for="emailInput1" sm={ 2 }>Email</Label>
                        <Col sm={ 10 }>
                            <Input type="email" name="email" id="emailInput1" placeholder="Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="emailInput2" sm={ 2 }>Width Icon</Label>
                        <Col sm={ 10 }>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <Icon name="at-sign" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="email" name="email" id="emailInput2" placeholder="Email" />
                            </InputGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row disabled>
                        <Label for="emailInput3" sm={ 2 }>Disabled</Label>
                        <Col sm={ 10 }>
                            <Input type="email" name="email" id="emailInput3" placeholder="Email" disabled />
                        </Col>
                    </FormGroup>
                </Snippet>

                <div className="rui-gap-4" id="formCheckboxesAndRadios"></div>
                <h2>Checkboxes and Radios</h2>
                <h3>Checkboxes</h3>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { CustomInput } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <CustomInput type="checkbox" id="formCheckbox1" label="Check this checkbox" />
                </Snippet>

                <div className="rui-gap-4" id="formRadios"></div>
                <h3>Radios</h3>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { CustomInput } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <CustomInput type="radio" id="formRadio1" name="formRadio" label="Select this custom radio" />
                    <CustomInput type="radio" id="formRadio2" name="formRadio" label="Or this one" />
                </Snippet>

                <div className="rui-gap-4" id="formCheckboxesAndRadiosDisabled"></div>
                <h3>Disabled</h3>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { CustomInput } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <CustomInput type="checkbox" id="formCheckboxDisabled1" label="Check this checkbox" disabled />
                    <CustomInput type="radio" id="formRadioDisabled1" name="formRadio2" label="Select this custom radio" disabled />
                </Snippet>

                <div className="rui-gap-4" id="formSwitches"></div>
                <h2>Switches</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { CustomInput } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <CustomInput type="switch" id="formSwitch1" name="formSwitch1" label="Turn on this custom switch" />
                    <CustomInput type="switch" id="formSwitch2" name="formSwitch2" label="Disabled custom switch" disabled />
                </Snippet>

                <div className="rui-gap-4" id="formSelect"></div>
                <h2>Select</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Input } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Input type="select" name="formSelect1" id="formSelect1">
                        <option>Open this select menu</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </Snippet>

                <div className="rui-gap-4" id="formRange"></div>
                <h2>Range</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Label, CustomInput } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Label for="formRange">Custom Range</Label>
                    <CustomInput type="range" id="formRange" name="formRange" />
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

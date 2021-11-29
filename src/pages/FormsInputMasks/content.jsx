/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Col, FormGroup, Label } from 'reactstrap';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import emailMask from 'text-mask-addons/dist/emailMask';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';

// Number Mask.
const numberMask = createNumberMask( {
    prefix: '$ ',
    suffix: '',
} );

/**
 * Component
 */
class Content extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            val1: '',
            val2: '',
            val3: '',
            val4: '',
            val5: '',
        };
    }

    render() {
        return (
            <Fragment>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Col, FormGroup, Label } from \'reactstrap\';',
                            'import MaskedInput from \'react-text-mask\';',
                            'import createNumberMask from \'text-mask-addons/dist/createNumberMask\';',
                            '',
                            '// Number Mask.',
                            'const numberMask = createNumberMask( {',
                            '    prefix: \'$ \',',
                            '    suffix: \'\',',
                            '} );',
                        ].join( '\n' )
                    }
                >
                    <FormGroup row>
                        <Label for="input1" sm={ 2 }>Date</Label>
                        <Col sm={ 10 }>
                            <MaskedInput
                                guide
                                className="form-control"
                                id="input1"
                                placeholder="25/09/1970"
                                mask={ [ /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/ ] }
                                value={ this.state.val1 }
                                onChange={ ( e ) => {
                                    this.setState( {
                                        val1: e.target.value,
                                    } );
                                } }
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="input2" sm={ 2 }>Telephone</Label>
                        <Col sm={ 10 }>
                            <MaskedInput
                                guide
                                className="form-control"
                                id="input2"
                                placeholder="+1 (555) 495-3947"
                                mask={ [ '+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/ ] }
                                value={ this.state.val2 }
                                onChange={ ( e ) => {
                                    this.setState( {
                                        val2: e.target.value,
                                    } );
                                } }
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="input3" sm={ 2 }>Currency</Label>
                        <Col sm={ 10 }>
                            <MaskedInput
                                guide
                                className="form-control"
                                id="input3"
                                placeholder="$ 40,890"
                                mask={ numberMask }
                                value={ this.state.val3 }
                                onChange={ ( e ) => {
                                    this.setState( {
                                        val3: e.target.value,
                                    } );
                                } }
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="input4" sm={ 2 }>IP Address</Label>
                        <Col sm={ 10 }>
                            <MaskedInput
                                guide
                                className="form-control"
                                id="input4"
                                placeholder="127.0.0.1"
                                mask={ ( value ) => {
                                    let result = [];
                                    const chunks = value.split( '.' );

                                    for ( let i = 0; i < 4; ++i ) {
                                        const chunk = ( chunks[ i ] || '' ).replace( /_/gi, '' );

                                        if ( chunk === '' ) {
                                            result.push( /\d/, /\d/, /\d/, '.' );
                                            continue;
                                        } else if ( +chunk === 0 ) {
                                            result.push( /\d/, '.' );
                                            continue;
                                        } else if (
                                            chunks.length < 4 ||
                                            ( chunk.length < 3 && chunks[ i ].indexOf( '_' ) !== -1 )
                                        ) {
                                            if (
                                                ( chunk.length < 2 && +`${ chunk }00` > 255 ) ||
                                                ( chunk.length < 3 && +`${ chunk }0` > 255 )
                                            ) {
                                                result.push( /\d/, /\d/, '.' );
                                                continue;
                                            } else {
                                                result.push( /\d/, /\d/, /\d/, '.' );
                                                continue;
                                            }
                                        } else {
                                            result.push( ...new Array( chunk.length ).fill( /\d/ ), '.' );
                                            continue;
                                        }
                                    }

                                    result = result.slice( 0, -1 );

                                    return result;
                                } }
                                pipe={ ( value ) => {
                                    if ( value === '.' || value.endsWith( '..' ) ) {
                                        return false;
                                    }

                                    const parts = value.split( '.' );

                                    if (
                                        parts.length > 4 ||
                                        parts.some( ( part ) => part === '00' || part < 0 || part > 255 )
                                    ) {
                                        return false;
                                    }

                                    return value;
                                } }
                                value={ this.state.val4 }
                                onChange={ ( e ) => {
                                    this.setState( {
                                        val4: e.target.value,
                                    } );
                                } }
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="input5" sm={ 2 }>Email</Label>
                        <Col sm={ 10 }>
                            <MaskedInput
                                guide
                                className="form-control"
                                id="input5"
                                placeholder="admin@google.com"
                                mask={ emailMask.mask }
                                pipe={ emailMask.pipe }
                                value={ this.state.val5 }
                                onChange={ ( e ) => {
                                    this.setState( {
                                        val5: e.target.value,
                                    } );
                                } }
                            />
                        </Col>
                    </FormGroup>
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

/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

/**
 * Component
 */
class Content extends Component {
    colorItem( name, className, color ) {
        return (
            <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
                <code>{ name }</code>
                <div className={ `demo-colors ${ className }` }>
                    { color }
                </div>
            </Col>
        );
    }

    render() {
        return (
            <Fragment>
                <h2>Backgrounds</h2>
                <Row className="vertical-gap">
                    { this.colorItem( 'bg-brand', 'bg-brand text-white', '#725ec3' ) }
                    { this.colorItem( 'bg-primary', 'bg-primary text-white', '#007bff' ) }
                    { this.colorItem( 'bg-secondary', 'bg-secondary text-white', '#6c757d' ) }
                    { this.colorItem( 'bg-success', 'bg-success text-white', '#2fc787' ) }
                    { this.colorItem( 'bg-danger', 'bg-danger text-white', '#ef5164' ) }
                    { this.colorItem( 'bg-warning', 'bg-warning text-white', '#fdbf21' ) }
                    { this.colorItem( 'bg-info', 'bg-info text-white', '#32bfc8' ) }
                    { this.colorItem( 'bg-light', 'bg-light', '#f8f9fa' ) }
                    { this.colorItem( 'bg-dark', 'bg-dark text-white', '#393f49' ) }
                </Row>

                <div className="rui-gap-4" />

                <h2>Text</h2>
                <Row className="vertical-gap">
                    { this.colorItem( 'text-brand', 'bg-grey-1 text-brand', '#725ec3' ) }
                    { this.colorItem( 'text-primary', 'bg-grey-1 text-primary', '#007bff' ) }
                    { this.colorItem( 'text-secondary', 'bg-grey-1 text-secondary', '#6c757d' ) }
                    { this.colorItem( 'text-success', 'bg-grey-1 text-success', '#2fc787' ) }
                    { this.colorItem( 'text-danger', 'bg-grey-1 text-danger', '#ef5164' ) }
                    { this.colorItem( 'text-warning', 'bg-grey-1 text-warning', '#fdbf21' ) }
                    { this.colorItem( 'text-info', 'bg-grey-1 text-info', '#32bfc8' ) }
                    { this.colorItem( 'text-light', 'bg-grey-4 text-light', '#f8f9fa' ) }
                    { this.colorItem( 'text-dark', 'bg-grey-1 text-dark', '#393f49' ) }
                </Row>
            </Fragment>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
) )( Content );

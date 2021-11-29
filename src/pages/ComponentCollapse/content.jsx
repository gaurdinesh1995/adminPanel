/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Collapse, UncontrolledCollapse, Button, Card, CardBody, CardText } from 'reactstrap';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';

/**
 * Component
 */
class Content extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            activeAccordion: 0,
        };
    }

    render() {
        const {
            activeAccordion,
        } = this.state;

        return (
            <Fragment>
                <h2 id="collapseButton">Button</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { UncontrolledCollapse, Button, Card, CardBody, CardText } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <div className="accordion-group">
                        <Button color="brand" id="collapseCard">
                            Collapse Button
                        </Button>
                        <UncontrolledCollapse toggler="#collapseCard">
                            <Card className="mt-15">
                                <CardBody>
                                    <CardText>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</CardText>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                    </div>
                </Snippet>

                <div className="rui-gap-4" id="collapseAccordion" />
                <h2>Accordion</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Collapse } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <div className="accordion-group">
                        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                        <a
                            href="#"
                            className="collapse-link"
                            onClick={ ( e ) => {
                                e.preventDefault();
                                this.setState( {
                                    activeAccordion: activeAccordion === 1 ? 0 : 1,
                                } );
                            } }
                        >
                            Collapsible Group Item #1
                        </a>
                        <Collapse isOpen={ 1 === activeAccordion }>
                            <div className="collapse-content">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
                            </div>
                        </Collapse>
                    </div>
                    <div className="accordion-group">
                        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                        <a
                            href="#"
                            className="collapse-link"
                            onClick={ ( e ) => {
                                e.preventDefault();
                                this.setState( {
                                    activeAccordion: activeAccordion === 2 ? 0 : 2,
                                } );
                            } }
                        >
                            Collapsible Group Item #2
                        </a>
                        <Collapse isOpen={ 2 === activeAccordion }>
                            <div className="collapse-content">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
                            </div>
                        </Collapse>
                    </div>
                    <div className="accordion-group">
                        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                        <a
                            href="#"
                            className="collapse-link"
                            onClick={ ( e ) => {
                                e.preventDefault();
                                this.setState( {
                                    activeAccordion: activeAccordion === 3 ? 0 : 3,
                                } );
                            } }
                        >
                            Collapsible Group Item #3
                        </a>
                        <Collapse isOpen={ 3 === activeAccordion }>
                            <div className="collapse-content">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
                            </div>
                        </Collapse>
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

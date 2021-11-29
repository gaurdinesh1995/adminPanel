/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
    Row, Col,
    Card, CardImg, CardHeader, CardBody, CardText,
    CardTitle, CardSubtitle, CardLink, CardFooter,
    Button, Collapse, ListGroup, ListGroupItem,
} from 'reactstrap';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import Icon from '../../components/icon';

/**
 * Component
 */
class Content extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            isCollapsed: true,
        };

        this.collapse = this.collapse.bind( this );
    }

    collapse() {
        this.setState( {
            isCollapsed: ! this.state.isCollapsed,
        } );
    }

    render() {
        const {
            isCollapsed,
        } = this.state;

        return (
            <Fragment>
                <h2 id="cardBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Card, CardImg, CardBody, CardTitle, CardText, Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Card>
                        <CardImg top src={ require( '../../../common-assets/images/card.png' ) } alt="" />
                        <CardBody>
                            <CardTitle className="h2">Card title</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            <Button color="brand">Go somewhere</Button>
                        </CardBody>
                    </Card>
                </Snippet>

                <div className="rui-gap-4" id="cardCollapse" />
                <h2>Collapse</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Card, CardImg, CardBody, CardTitle, CardText, Button, Collapse } from \'reactstrap\';',
                            'import Icon from \'../../components/icon\';',
                        ].join( '\n' )
                    }
                >
                    <Card>
                        <CardImg top src={ require( '../../../common-assets/images/card.png' ) } alt="" />
                        <CardBody className="pb-20">
                            <CardTitle className="h2 mb-0">Card title</CardTitle>
                            <Button className="btn-custom-round card-btn-collapse" onClick={ this.collapse }>
                                <Icon name="code" />
                            </Button>
                            <Collapse isOpen={ isCollapsed }>
                                <CardText className="pt-15 mnt-2">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                                <Button color="brand" className="mt-20">Go somewhere</Button>
                            </Collapse>
                        </CardBody>
                    </Card>
                </Snippet>

                <div className="rui-gap-4" id="cardBody" />
                <h2>Body</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Card, CardBody } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Card>
                        <CardBody className="mnt-6 mnb-6">
                            This is some text within a card body.
                        </CardBody>
                    </Card>
                </Snippet>

                <div className="rui-gap-4" id="cardTitles" />
                <h2>Titles, text, and links</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Card>
                        <CardBody>
                            <CardTitle className="h2">Card title</CardTitle>
                            <CardSubtitle className="h4 text-muted">Card subtitle</CardSubtitle>
                            <CardText className="mb-15">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            <CardLink href="#">Card link</CardLink>
                            <CardLink href="#">Another link</CardLink>
                        </CardBody>
                    </Card>
                </Snippet>

                <div className="rui-gap-4" id="cardList" />
                <h2>List Group</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Card, CardHeader, ListGroup, ListGroupItem } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Card>
                        <CardHeader>
                            Featured
                        </CardHeader>
                        <ListGroup flush>
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Snippet>

                <div className="rui-gap-4" id="cardKitchen" />
                <h2>Kitchen sink</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Card, CardImg, CardBody, CardTitle, CardText, CardLink, ListGroup, ListGroupItem } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Card>
                        <CardImg top src={ require( '../../../common-assets/images/card.png' ) } alt="" />
                        <CardBody>
                            <CardTitle className="h2">Card title</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                        </CardBody>
                        <ListGroup flush>
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        <CardBody>
                            <div className="mnt-5 mnb-5">
                                <CardLink href="#">Card link</CardLink>
                                <CardLink href="#">Another link</CardLink>
                            </div>
                        </CardBody>
                    </Card>
                </Snippet>

                <div className="rui-gap-4" id="cardHeader" />
                <h2>Header and footer</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Card>
                        <CardHeader>
                            Featured
                        </CardHeader>
                        <CardBody>
                            <CardTitle className="h2">Special title treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button color="brand">Go somewhere</Button>
                        </CardBody>
                    </Card>
                </Snippet>

                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Card, CardHeader, CardBody } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Card>
                        <CardHeader>
                            Quote
                        </CardHeader>
                        <CardBody>
                            <blockquote className="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer className="blockquote-footer mnt-7 mnb-5">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Snippet>

                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Card className="text-center">
                        <CardHeader>
                            Featured
                        </CardHeader>
                        <CardBody>
                            <CardTitle className="h2">Special title treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button color="brand">Go somewhere</Button>
                        </CardBody>
                        <CardFooter className="text-muted">
                            2 days ago
                        </CardFooter>
                    </Card>
                </Snippet>

                <div className="rui-gap-4" id="cardSizing" />
                <h2>Sizing</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Row className="xs-gap vertical-gap">
                        <Col sm="6">
                            <Card>
                                <CardBody>
                                    <CardTitle className="h2">Special title treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button color="brand">Go somewhere</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card>
                                <CardBody>
                                    <CardTitle className="h2">Special title treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button color="brand">Go somewhere</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Snippet>

                <div className="rui-gap-4" id="cardAlignment" />
                <h2>Text alignment</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Row className="xs-gap vertical-gap">
                        <Col sm="4">
                            <Card>
                                <CardBody>
                                    <CardTitle className="h2">Special title treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button color="brand">Go somewhere</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card className="text-center">
                                <CardBody>
                                    <CardTitle className="h2">Special title treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button color="brand">Go somewhere</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card className="text-right">
                                <CardBody>
                                    <CardTitle className="h2">Special title treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button color="brand">Go somewhere</Button>
                                </CardBody>
                            </Card>
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

/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'reactstrap';

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
                <h2 id="btnBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="brand">Brand</Button>
                    { ' ' }
                    <Button color="primary">Primary</Button>
                    { ' ' }
                    <Button color="secondary">Secondary</Button>
                    { ' ' }
                    <Button color="success">Success</Button>
                    { ' ' }
                    <Button color="danger">Danger</Button>
                    { ' ' }
                    <Button color="warning">Warning</Button>
                    { ' ' }
                    <Button color="info">Info</Button>
                    { ' ' }
                    <Button color="light">Light</Button>
                    { ' ' }
                    <Button color="dark">Dark</Button>
                    { ' ' }
                    <Button color="link">Link</Button>
                </Snippet>

                <div className="rui-gap-4" id="btnOutline"></div>
                <h2>Outline</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="brand" outline>Brand</Button>
                    { ' ' }
                    <Button color="primary" outline>Primary</Button>
                    { ' ' }
                    <Button color="secondary" outline>Secondary</Button>
                    { ' ' }
                    <Button color="success" outline>Success</Button>
                    { ' ' }
                    <Button color="danger" outline>Danger</Button>
                    { ' ' }
                    <Button color="warning" outline>Warning</Button>
                    { ' ' }
                    <Button color="info" outline>Info</Button>
                    { ' ' }
                    <Button color="light" outline>Light</Button>
                    { ' ' }
                    <Button color="dark" outline>Dark</Button>
                </Snippet>

                <div className="rui-gap-4" id="btnGrey"></div>
                <h2>Grey</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="grey-1">Grey 1</Button>
                    { ' ' }
                    <Button color="grey-2">Grey 2</Button>
                    { ' ' }
                    <Button color="grey-3">Grey 3</Button>
                </Snippet>

                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="grey-1" className="btn-outline">Grey 1</Button>
                    { ' ' }
                    <Button color="grey-2" className="btn-outline">Grey 2</Button>
                    { ' ' }
                    <Button color="grey-3" className="btn-outline">Grey 3</Button>
                </Snippet>

                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="grey-1" className="btn-hover-outline">Grey 1</Button>
                    { ' ' }
                    <Button color="grey-2" className="btn-hover-outline">Grey 2</Button>
                    { ' ' }
                    <Button color="grey-3" className="btn-hover-outline">Grey 3</Button>
                </Snippet>

                <div className="rui-gap-4" id="btnIcon"></div>
                <h2>Icon</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                            'import Icon from \'../../components/icon\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="brand" className="btn-long">
                        <span className="text">Brand</span>
                        <span className="icon">
                            <Icon name="check" />
                        </span>
                    </Button>
                    { ' ' }
                    <Button color="brand" className="btn-long">
                        <span className="icon">
                            <Icon name="check" />
                        </span>
                        <span className="text">Brand</span>
                    </Button>
                    { ' ' }
                    <Button color="brand" className="btn-long">
                        <span className="icon">
                            <Icon name="check" />
                        </span>
                    </Button>
                </Snippet>

                <div className="rui-gap-4" id="btnRound"></div>
                <h2>Round, long and uniform</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                            'import Icon from \'../../components/icon\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="brand" className="btn-long btn-round">Brand</Button>
                    { ' ' }
                    <Button color="brand" className="btn-long">Brand</Button>
                    { ' ' }
                    <Button color="brand" className="btn-uniform btn-round">
                        <span className="icon">
                            <Icon name="check" />
                        </span>
                    </Button>
                    { ' ' }
                    <Button color="brand" className="btn-uniform">
                        <span className="icon">
                            <Icon name="check" />
                        </span>
                    </Button>
                </Snippet>

                <div className="rui-gap-4" id="btnLarge"></div>
                <h2>Large</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="brand" size="lg">Large Button</Button>
                    { ' ' }
                    <Button color="secondary" size="lg">Large Button</Button>
                </Snippet>

                <div className="rui-gap-4" id="btnSmall"></div>
                <h2>Small</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="brand" size="sm">Small Button</Button>
                    { ' ' }
                    <Button color="secondary" size="sm">Small Button</Button>
                </Snippet>

                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="brand" size="lg" block>Block level button</Button>
                    { ' ' }
                    <Button color="secondary" size="lg" block>Block level button</Button>
                </Snippet>

                <div className="rui-gap-4" id="btnHover"></div>
                <h2>Hover</h2>
                <h3>Outline</h3>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="brand" className="btn-hover-outline btn-round">Brand</Button>
                    { ' ' }
                    <Button color="brand" className="btn-hover-outline">Brand</Button>
                </Snippet>

                <div className="rui-gap-4" id="btnCustom"></div>
                <h3>Custom round</h3>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                            'import Icon from \'../../components/icon\';',
                        ].join( '\n' )
                    }
                >
                    <Button className="btn-custom-round">
                        <Icon name="star" />
                    </Button>
                </Snippet>

                <div className="rui-gap-4" id="btnColors"></div>
                <h3>Colors</h3>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="brand" className="btn-hover-primary">Button</Button>
                    { ' ' }
                    <Button color="brand" className="btn-hover-secondary">Button</Button>
                    { ' ' }
                    <Button color="brand" className="btn-hover-success">Button</Button>
                    { ' ' }
                    <Button color="brand" className="btn-hover-danger">Button</Button>
                    { ' ' }
                    <Button color="brand" className="btn-hover-warning">Button</Button>
                    { ' ' }
                    <Button color="brand" className="btn-hover-info">Button</Button>
                    { ' ' }
                    <Button color="brand" className="btn-hover-light">Button</Button>
                    { ' ' }
                    <Button color="brand" className="btn-hover-dark">Button</Button>
                </Snippet>

                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="brand" className="btn-hover-outline btn-hover-primary">Button</Button>
                    { ' ' }
                    <Button color="brand" className="btn-hover-outline btn-hover-secondary">Button</Button>
                    { ' ' }
                    <Button color="brand" className="btn-hover-outline btn-hover-success">Button</Button>
                    { ' ' }
                    <Button color="brand" className="btn-hover-outline btn-hover-danger">Button</Button>
                    { ' ' }
                    <Button color="brand" className="btn-hover-outline btn-hover-warning">Button</Button>
                    { ' ' }
                    <Button color="brand" className="btn-hover-outline btn-hover-info">Button</Button>
                    { ' ' }
                    <Button color="brand" className="btn-hover-outline btn-hover-light">Button</Button>
                    { ' ' }
                    <Button color="brand" className="btn-hover-outline btn-hover-dark">Button</Button>
                </Snippet>

                <div className="rui-gap-4" id="btnGroup"></div>
                <h2>Group</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button, ButtonGroup } from \'reactstrap\';',
                            'import Icon from \'../../components/icon\';',
                        ].join( '\n' )
                    }
                >
                    <ButtonGroup>
                        <Button color="brand">Left</Button>
                        <Button color="brand">Middle</Button>
                        <Button color="brand">Right</Button>
                    </ButtonGroup>
                    { ' ' }
                    <ButtonGroup>
                        <Button color="brand" className="btn-long">Brand</Button>
                        <Button color="brand" className="btn-uniform">
                            <Icon name="check" />
                        </Button>
                    </ButtonGroup>
                    { ' ' }
                    <ButtonGroup>
                        <Button color="brand" className="btn-uniform">
                            <Icon name="check" />
                        </Button>
                        <Button color="brand" className="btn-long">Brand</Button>
                    </ButtonGroup>
                    { ' ' }
                    <ButtonGroup>
                        <Button color="brand" className="btn-round btn-long">Brand</Button>
                        <Button color="brand" className="btn-round btn-uniform">
                            <Icon name="check" />
                        </Button>
                    </ButtonGroup>
                    { ' ' }
                    <ButtonGroup>
                        <Button color="brand" className="btn-round btn-uniform">
                            <Icon name="check" />
                        </Button>
                        <Button color="brand" className="btn-round btn-long">Brand</Button>
                    </ButtonGroup>
                </Snippet>

                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button, ButtonGroup } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <ButtonGroup vertical>
                        <Button color="brand">Left</Button>
                        <Button color="brand">Middle</Button>
                        <Button color="brand">Right</Button>
                    </ButtonGroup>
                </Snippet>

                <div className="rui-gap-4" id="btnActive"></div>
                <h2>Active</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="brand" active>Button</Button>
                    { ' ' }
                    <Button color="secondary" active>Button</Button>
                </Snippet>

                <div className="rui-gap-4" id="btnDisabled"></div>
                <h2>Disabled</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button color="brand" disabled>Button</Button>
                    { ' ' }
                    <Button color="secondary" disabled>Button</Button>
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

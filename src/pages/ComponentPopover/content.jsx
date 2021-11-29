/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

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
                <h2 id="popoverBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button id="popover1" color="brand">
                        Launch Popover
                    </Button>
                    <UncontrolledPopover placement="right" target="popover1" trigger="focus">
                        <PopoverHeader>Popover title</PopoverHeader>
                        <PopoverBody>And here&apos;s some amazing content. It&apos;s very engaging. Right?</PopoverBody>
                    </UncontrolledPopover>
                </Snippet>

                <div className="rui-gap-4" id="paginationDirections"></div>
                <h2>Directions</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Button id="popover2" color="secondary">
                        Top
                    </Button>
                    <UncontrolledPopover placement="top" target="popover2" trigger="focus">
                        <PopoverHeader>Popover title</PopoverHeader>
                        <PopoverBody>And here&apos;s some amazing content. It&apos;s very engaging. Right?</PopoverBody>
                    </UncontrolledPopover>

                    { ' ' }

                    <Button id="popover3" color="secondary">
                        Right
                    </Button>
                    <UncontrolledPopover placement="right" target="popover3" trigger="focus">
                        <PopoverHeader>Popover title</PopoverHeader>
                        <PopoverBody>And here&apos;s some amazing content. It&apos;s very engaging. Right?</PopoverBody>
                    </UncontrolledPopover>

                    { ' ' }

                    <Button id="popover4" color="secondary">
                        Bottom
                    </Button>
                    <UncontrolledPopover placement="bottom" target="popover4" trigger="focus">
                        <PopoverHeader>Popover title</PopoverHeader>
                        <PopoverBody>And here&apos;s some amazing content. It&apos;s very engaging. Right?</PopoverBody>
                    </UncontrolledPopover>

                    { ' ' }

                    <Button id="popover5" color="secondary">
                        Left
                    </Button>
                    <UncontrolledPopover placement="left" target="popover5" trigger="focus">
                        <PopoverHeader>Popover title</PopoverHeader>
                        <PopoverBody>And here&apos;s some amazing content. It&apos;s very engaging. Right?</PopoverBody>
                    </UncontrolledPopover>
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

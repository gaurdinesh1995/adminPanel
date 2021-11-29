/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Progress } from 'reactstrap';

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
                <h2 id="progressBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Progress } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Progress color="brand" value="0" />
                    <Progress color="brand" value="25" />
                    <Progress color="brand" value="50" />
                    <Progress color="brand" value="75" />
                    <Progress color="brand" value="100" />
                </Snippet>

                <div className="rui-gap-4" id="progressColors"></div>
                <h2>Colors</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Progress } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Progress color="success" value="25" />
                    <Progress color="info" value="50" />
                    <Progress color="warning" value="75" />
                    <Progress color="danger" value="100" />
                </Snippet>

                <div className="rui-gap-4" id="progressStriped"></div>
                <h2>Striped</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Progress } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Progress color="success" value="25" striped />
                    <Progress color="info" value="50" striped />
                    <Progress color="warning" value="75" striped />
                    <Progress color="danger" value="100" striped />
                </Snippet>

                <div className="rui-gap-4" id="progressAnimated"></div>
                <h2>Animated</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import { Progress } from \'reactstrap\';',
                        ].join( '\n' )
                    }
                >
                    <Progress animated color="brand" value="10" />
                    <Progress animated color="success" value="25" />
                    <Progress animated color="info" value="50" />
                    <Progress animated color="warning" value="75" />
                    <Progress animated color="danger" value="100" />
                    <Progress multi>
                        <Progress animated bar color="brand" value="10" />
                        <Progress animated bar color="success" value="30" />
                        <Progress animated bar color="warning" value="20" />
                        <Progress animated bar color="danger" value="20" />
                    </Progress>
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

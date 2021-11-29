/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

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
                <h2 id="typographyBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                >
                    <h1>H1. Heading</h1>
                    <h2>H2. Heading</h2>
                    <h3>H3. Heading</h3>
                    <h4>H4. Heading</h4>
                    <h5>H5. Heading</h5>
                    <h6>H6. Heading</h6>
                </Snippet>

                <div className="rui-gap-4" id="typographyDisplay" />
                <h2>Display</h2>
                <Snippet
                    language="html"
                    preview
                >
                    <h1 className="display-1">Display 1</h1>
                    <h1 className="display-2">Display 2</h1>
                    <h1 className="display-3">Display 3</h1>
                    <h1 className="display-4">Display 4</h1>
                </Snippet>

                <div className="rui-gap-4" id="typographyLead" />
                <h2>Lead</h2>
                <Snippet
                    language="html"
                    preview
                >
                    <p className="lead">
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                    </p>
                </Snippet>

                <div className="rui-gap-4" id="typographyInline" />
                <h2>Inline text elements</h2>
                <Snippet
                    language="html"
                    preview
                >
                    <p>
                        You can use the mark tag to
                        { ' ' }
                        <mark>highlight</mark>
                        { ' ' }
                        text.
                    </p>
                    <p><del>This line of text is meant to be treated as deleted text.</del></p>
                    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                    <p><u>This line of text will render as underlined</u></p>
                    <p><small>This line of text is meant to be treated as fine print.</small></p>
                    <p><strong>This line rendered as bold text.</strong></p>
                    <p><em>This line rendered as italicized text.</em></p>
                </Snippet>

                <div className="rui-gap-4" id="typographyBlockquotes" />
                <h2>Blockquotes</h2>
                <Snippet
                    language="html"
                    preview
                >
                    <blockquote className="blockquote">
                        <p className="mb-0">Subdue said second lights together great morning second second there.</p>
                        <footer className="blockquote-footer">John Doe</footer>
                    </blockquote>
                </Snippet>

                <div className="rui-gap-4" id="typographyBlockquotes2" />
                <h2>Blockquotes 2</h2>
                <Snippet
                    language="html"
                    preview
                >
                    <blockquote className="blockquote blockquote-style-2">
                        <p className="mb-0">
                            Face to don&apos;t open.
                            <br />
                            Hath i and gathering so open let him fruitful evening lights bring god abundantly gathered.
                        </p>
                        <footer className="blockquote-footer">John Doe</footer>
                    </blockquote>
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

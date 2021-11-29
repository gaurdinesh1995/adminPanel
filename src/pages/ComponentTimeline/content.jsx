/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import Timeline from '../../components/timeline';
import Icon from '../../components/icon';

/**
 * Component
 */
class Content extends Component {
    render() {
        return (
            <Fragment>
                <h2 id="timelineBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Timeline from \'../../components/timeline\';',
                            'import Icon from \'../../components/icon\';',
                        ].join( '\n' )
                    }
                >
                    <Timeline lg="left">
                        <Timeline.Item
                            icon={ <Icon name="check-circle" /> }
                            date={ 'Jan 14' }
                        >
                            <h3>Fifth moveth, void second.</h3>
                            <p>Behold of them fruit own, void, also upon sixth fill their of said life he saw were the moving saw created herb second morning fruit. Doesn&apos;t second place gathering forth.</p>
                            <button type="button" className="btn btn-brand">Read More</button>
                        </Timeline.Item>
                        <Timeline.Item
                            icon={ <Icon name="award" /> }
                            date={ 'Jan 15' }
                            swap
                        >
                            <h3>Can&apos;t dry fly.</h3>
                            <p>Likeness they&apos;re every give moved above moveth, herb days a rule behold seed is second night behold sea. Under given waters made wherein behold void form land.</p>
                            <button type="button" className="btn btn-brand">Read More</button>
                        </Timeline.Item>
                    </Timeline>
                </Snippet>

                <div className="rui-gap-4" id="timelineLeft"></div>
                <h2>Left</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Timeline from \'../../components/timeline\';',
                        ].join( '\n' )
                    }
                >
                    <Timeline left>
                        <Timeline.Item
                            icon={ <Icon name="check-circle" /> }
                            date={ 'Jan 14' }
                        >
                            <h3>Fifth moveth, void second.</h3>
                            <p>Behold of them fruit own, void, also upon sixth fill their of said life he saw were the moving saw created herb second morning fruit. Doesn&apos;t second place gathering forth.</p>
                            <button type="button" className="btn btn-brand">Read More</button>
                        </Timeline.Item>
                        <Timeline.Item
                            icon={ <Icon name="award" /> }
                            date={ 'Jan 15' }
                            swap
                        >
                            <h3>Can&apos;t dry fly.</h3>
                            <p>Likeness they&apos;re every give moved above moveth, herb days a rule behold seed is second night behold sea. Under given waters made wherein behold void form land.</p>
                            <button type="button" className="btn btn-brand">Read More</button>
                        </Timeline.Item>
                    </Timeline>
                </Snippet>

                <div className="rui-gap-4" id="timelineRight"></div>
                <h2>Right</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Timeline from \'../../components/timeline\';',
                        ].join( '\n' )
                    }
                    reactRenderOptions={ {
                        filterProps: [ 'data' ],
                    } }
                >
                    <Timeline right>
                        <Timeline.Item
                            icon={ <Icon name="check-circle" /> }
                            date={ 'Jan 14' }
                        >
                            <h3>Fifth moveth, void second.</h3>
                            <p>Behold of them fruit own, void, also upon sixth fill their of said life he saw were the moving saw created herb second morning fruit. Doesn&apos;t second place gathering forth.</p>
                            <button type="button" className="btn btn-brand">Read More</button>
                        </Timeline.Item>
                        <Timeline.Item
                            icon={ <Icon name="award" /> }
                            date={ 'Jan 15' }
                            swap
                        >
                            <h3>Can&apos;t dry fly.</h3>
                            <p>Likeness they&apos;re every give moved above moveth, herb days a rule behold seed is second night behold sea. Under given waters made wherein behold void form land.</p>
                            <button type="button" className="btn btn-brand">Read More</button>
                        </Timeline.Item>
                    </Timeline>
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

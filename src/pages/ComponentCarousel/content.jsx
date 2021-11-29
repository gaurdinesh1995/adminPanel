/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import Carousel from '../../components/bs-carousel';

/**
 * Component
 */
class Content extends Component {
    render() {
        return (
            <Fragment>
                <h2 id="carouselBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import Carousel from \'../../components/bs-carousel\';',
                        ].join( '\n' )
                    }
                >
                    <Carousel
                        slide
                        controls
                        items={ [
                            {
                                imgSrc: require( '../../../common-assets/images/slide-first.svg' ),
                                imgAlt: '',
                            }, {
                                imgSrc: require( '../../../common-assets/images/slide-second.svg' ),
                                imgAlt: '',
                            }, {
                                imgSrc: require( '../../../common-assets/images/slide-third.svg' ),
                                imgAlt: '',
                            },
                        ] }
                    />
                </Snippet>

                <div className="rui-gap-4" id="carouselIndicators" />
                <h2>Indicators</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import Carousel from \'../../components/bs-carousel\';',
                        ].join( '\n' )
                    }
                >
                    <Carousel
                        slide
                        controls
                        indicators
                        items={ [
                            {
                                imgSrc: require( '../../../common-assets/images/slide-first.svg' ),
                                imgAlt: '',
                            }, {
                                imgSrc: require( '../../../common-assets/images/slide-second.svg' ),
                                imgAlt: '',
                            }, {
                                imgSrc: require( '../../../common-assets/images/slide-third.svg' ),
                                imgAlt: '',
                            },
                        ] }
                    />
                </Snippet>

                <div className="rui-gap-4" id="carouselCaptions" />
                <h2>Captions</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import Carousel from \'../../components/bs-carousel\';',
                        ].join( '\n' )
                    }
                >
                    <Carousel
                        slide
                        controls
                        indicators
                        items={ [
                            {
                                imgSrc: require( '../../../common-assets/images/slide-first.svg' ),
                                imgAlt: '',
                                header: 'First slide label',
                                text: 'Thing seed beginning you\'re bring i great one divided fly.',
                            }, {
                                imgSrc: require( '../../../common-assets/images/slide-second.svg' ),
                                imgAlt: '',
                                header: 'Second slide label',
                                text: 'Greater dominion our from behold unto heaven from lesser multiply.',
                            }, {
                                imgSrc: require( '../../../common-assets/images/slide-third.svg' ),
                                imgAlt: '',
                                header: 'Third slide label',
                                text: 'Land seasons that creeping deep abundantly given from first have.',
                            },
                        ] }
                    />
                </Snippet>

                <div className="rui-gap-4" id="carouselFade" />
                <h2>Fade</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import Carousel from \'../../components/bs-carousel\';',
                        ].join( '\n' )
                    }
                >
                    <Carousel
                        slide
                        controls
                        indicators
                        className="carousel-fade"
                        items={ [
                            {
                                imgSrc: require( '../../../common-assets/images/slide-first.svg' ),
                                imgAlt: '',
                            }, {
                                imgSrc: require( '../../../common-assets/images/slide-second.svg' ),
                                imgAlt: '',
                            }, {
                                imgSrc: require( '../../../common-assets/images/slide-third.svg' ),
                                imgAlt: '',
                            },
                        ] }
                    />
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

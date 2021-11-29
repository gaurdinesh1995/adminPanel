/**
 * External Dependencies
 */
import classnames from 'classnames/dedupe';
import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';

/**
 * Internal Dependencies
 */
import Icon from '../icon';

/**
 * Dropdown Component
 */
class BsCarousel extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            activeIndex: parseInt( props.activeIndex || 0, 10 ),
        };

        this.next = this.next.bind( this );
        this.previous = this.previous.bind( this );
        this.goToIndex = this.goToIndex.bind( this );
        this.onExiting = this.onExiting.bind( this );
        this.onExited = this.onExited.bind( this );
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if ( this.animating ) {
            return;
        }

        const nextIndex = this.state.activeIndex === ( this.props.items.length - 1 ) ? 0 : ( this.state.activeIndex + 1 );

        this.goToIndex( nextIndex );
    }

    previous() {
        if ( this.animating ) {
            return;
        }

        const nextIndex = ( this.state.activeIndex === 0 ? this.props.items.length : this.state.activeIndex ) - 1;

        this.goToIndex( nextIndex );
    }

    goToIndex( newIndex ) {
        if ( this.animating ) {
            return;
        }

        this.setState( {
            activeIndex: newIndex,
        } );
    }

    render() {
        const {
            activeIndex,
        } = this.state;

        const {
            items,
            interval,
            indicators,
            controls,
            slide,
            className,
        } = this.props;

        const slides = items.map( ( item ) => {
            return (
                <CarouselItem
                    onExiting={ this.onExiting }
                    onExited={ this.onExited }
                    key={ item.imgSrc }
                >
                    <img src={ item.imgSrc } alt={ item.imgAlt } className="d-block w-100" />
                    { item.header || item.text ? (
                        <div className="carousel-caption d-none d-md-block">
                            { item.header ? (
                                <h5 className="h3">{ item.header }</h5>
                            ) : '' }
                            { item.text ? (
                                <p className="mb-15 pb-3">{ item.text }</p>
                            ) : '' }
                        </div>
                    ) : '' }
                </CarouselItem>
            );
        } );

        return (
            <Carousel
                activeIndex={ activeIndex }
                next={ this.next }
                previous={ this.previous }
                interval={ interval }
                slide={ slide }
                className={ classnames( 'carousel-light', className ) }
            >
                { slides }
                { indicators ? (
                    <CarouselIndicators items={ items } activeIndex={ activeIndex } onClickHandler={ this.goToIndex } />
                ) : '' }
                { controls ? (
                    <>
                        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                        <a
                            className="carousel-control-prev"
                            role="button"
                            tabIndex="0"
                            href="#"
                            onKeyDown={ () => {} }
                            onClick={ ( e ) => {
                                e.preventDefault();
                                this.previous();
                            } }
                        >
                            <Icon name="chevron-left" />
                            <span className="sr-only">Previous</span>
                        </a>
                        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                        <a
                            className="carousel-control-next"
                            role="button"
                            tabIndex="0"
                            href="#"
                            onKeyDown={ () => {} }
                            onClick={ ( e ) => {
                                e.preventDefault();
                                this.next();
                            } }
                        >
                            <Icon name="chevron-right" />
                            <span className="sr-only">Next</span>
                        </a>
                    </>
                ) : '' }
            </Carousel>
        );
    }
}

// BsCarousel.Menu = BsCarouselMenu;
// BsCarousel.Toggle = DropdownToggle;
// BsCarousel.Item = DropdownItem;

export default BsCarousel;

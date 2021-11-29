/* eslint-disable react/prop-types */
/**
 * Styles
 */
import './style.scss';

/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

/**
 * Internal Dependencies
 */
import Icon from '../../components/icon';
import TextEditor from '../../components/text-editor';
import FancyBox from '../../components/fancybox';
import { initMailbox } from '../../../common-assets/js/rootui-parts/initMailbox';

window.RootUI.initMailbox = initMailbox;
window.RootUI.initMailbox();

/**
 * Component
 */
class Content extends Component {
    render() {
        const { settings } = this.props;

        return (
            <Fragment>
                <div className="rui-mailbox">
                    <div className="rui-mailbox-head">
                        <div className="rui-mailbox-search">
                            <form action="#">
                                <div className="d-flex align-items-center">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <button type="button" className="btn btn-clean btn-uniform btn-grey-5">
                                                <Icon name="search" />
                                            </button>
                                        </div>
                                        <input type="search" className="form-control form-control-clean" placeholder="Type to search..." />
                                    </div>
                                    <button type="button" className="btn btn-custom-round ml-10 d-flex d-md-none">
                                        <Icon name="more-vertical" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="rui-mailbox-buttons d-none d-md-block">
                            <ul>
                                <li>
                                    <button type="button" className="btn btn-custom-round">
                                        <Icon name="archive" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="btn btn-custom-round">
                                        <Icon name="alert-octagon" />
                                    </button>
                                </li>
                                <li className="mr-auto">
                                    <button type="button" className="btn btn-custom-round">
                                        <Icon name="trash" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="btn btn-custom-round">
                                        <Icon name="star" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="btn btn-custom-round">
                                        <Icon name="send" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="btn btn-brand btn-uniform btn-round btn-sm">
                                        <Icon name="plus" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="rui-mailbox-list rui-scrollbar">
                        <ul>
                            <li>
                                <Link to="#" className="rui-mailbox-item rui-mailbox-item-unread">
                                    <span className="rui-mailbox-item-title h4">{ settings.users[ 2 ].name }</span>
                                    <small className="rui-mailbox-item-subtitle">Work schedule changed</small>
                                    <small className="rui-mailbox-item-text">Fruitful wherein fly them two so deep abundantly kind rule.</small>
                                    <small className="rui-mailbox-item-date">Jun 17, 2020</small>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="rui-mailbox-item rui-mailbox-item-unread">
                                    <span className="rui-mailbox-item-title h4">Github</span>
                                    <small className="rui-mailbox-item-subtitle">Reset your password</small>
                                    <small className="rui-mailbox-item-text">Fowl image said creepeth fourth created were is you&apos;re male.</small>
                                    <small className="rui-mailbox-item-date">Jun 17, 2020</small>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="rui-mailbox-item active">
                                    <span className="rui-mailbox-item-title h4">{ settings.users[ 1 ].name }</span>
                                    <small className="rui-mailbox-item-subtitle">Hi, Jack!</small>
                                    <small className="rui-mailbox-item-text">Without air upon two was. Their stars. Days whose earth.</small>
                                    <small className="rui-mailbox-item-date">Jun 16, 2020</small>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="rui-mailbox-item">
                                    <span className="rui-mailbox-item-title h4">Github</span>
                                    <small className="rui-mailbox-item-subtitle">Welcome to our team</small>
                                    <small className="rui-mailbox-item-text">Was fifth of He, heaven, own first can&apos;t fourth own.</small>
                                    <small className="rui-mailbox-item-date">Jun 16, 2020</small>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="rui-mailbox-content">
                        <div className="rui-mailbox-content-head">
                            <div className="d-none d-md-block">
                                <div className="rui-mailbox-content-title h2">Hi, Jack!</div>
                                <div className="rui-mailbox-content-subtitle">
                                    { settings.users[ 1 ].name }
                                    { ' ' }
                                    <span className="text-grey-5 ml-5 mr-5">Sends to</span>
                                    { ' ' }
                                    You
                                </div>
                                <div className="rui-mailbox-content-date">
                                    <span>Jun 17, 2020</span>
                                    <span>09:34</span>
                                </div>
                            </div>
                            <div className="d-flex d-md-none mnt-1 mnb-1 align-items-center justify-content-between">
                                <Link to="#" className="btn btn-custom-round rui-mailbox-content-back">
                                    <Icon name="chevron-left" />
                                </Link>
                                <h4 className="mnb-2">{ settings.users[ 1 ].name }</h4>
                                <Link to="#" className="btn btn-custom-round">
                                    <Icon name="more-vertical" />
                                </Link>
                            </div>
                        </div>
                        <div className="rui-mailbox-content-body rui-scrollbar">
                            <div className="d-block d-md-none mb-25">
                                <div className="rui-mailbox-content-title h2">Hi, Jack!</div>
                                <div className="rui-mailbox-content-subtitle">
                                    { settings.users[ 1 ].name }
                                    { ' ' }
                                    <span className="text-grey-5 ml-5 mr-5">Sends to</span>
                                    { ' ' }
                                    You
                                </div>
                                <div className="rui-mailbox-content-date">
                                    <span>Jun 17, 2020</span>
                                    <span>09:34</span>
                                </div>
                            </div>
                            <p>
                                Without air upon two was. Their stars. Days whose earth. Grass whales there living third shall is in.
                                Under sixth, a cattle doesn&apos;t night image sixth divided, beginning be light creeping second abundantly given.
                            </p>
                            <p>
                                Unto them heaven created second, without saying open which every can&apos;t let may you&apos;re air the also dry blessed upon she&apos;d two divide
                                Green you&apos;re multiply in midst third night winged moving bearing fruitful multiply him from own, multiply form can&apos;t created upon two made.
                            </p>
                            <p>In man signs for behold under. Appear their the give every us cattle firmament creature stars without had greater seed.</p>
                            <Row className="vertical-gap rui-gallery">
                                <Col xs={ 6 } lg={ 3 }>
                                    <FancyBox
                                        tagName="a"
                                        className="rui-gallery-item"
                                        href={ settings.letters[ 0 ].img }
                                        closeExisting
                                        popupClassName="rui-popup"
                                        galleryId="mail-gallery"
                                    >
                                        <span className="rui-gallery-item-overlay rui-gallery-item-overlay-md">
                                            <Icon name="maximize" />
                                        </span>
                                        <img src={ settings.letters[ 0 ].img_min } className="rui-img" alt="" />
                                    </FancyBox>
                                </Col>
                                <Col xs={ 6 } lg={ 3 }>
                                    <FancyBox
                                        tagName="a"
                                        className="rui-gallery-item"
                                        href={ settings.letters[ 1 ].img }
                                        closeExisting
                                        popupClassName="rui-popup"
                                        galleryId="mail-gallery"
                                    >
                                        <span className="rui-gallery-item-overlay rui-gallery-item-overlay-md">
                                            <Icon name="maximize" />
                                        </span>
                                        <img src={ settings.letters[ 1 ].img_min } className="rui-img" alt="" />
                                    </FancyBox>
                                </Col>
                                <Col xs={ 6 } lg={ 3 }>
                                    <FancyBox
                                        tagName="a"
                                        className="rui-gallery-item"
                                        href={ settings.letters[ 2 ].img }
                                        closeExisting
                                        popupClassName="rui-popup"
                                        galleryId="mail-gallery"
                                    >
                                        <span className="rui-gallery-item-overlay rui-gallery-item-overlay-md">
                                            <Icon name="maximize" />
                                        </span>
                                        <img src={ settings.letters[ 2 ].img_min } className="rui-img" alt="" />
                                    </FancyBox>
                                </Col>
                                <Col xs={ 6 } lg={ 3 }>
                                    <FancyBox
                                        tagName="a"
                                        className="rui-gallery-item"
                                        href={ settings.letters[ 3 ].img }
                                        closeExisting
                                        popupClassName="rui-popup"
                                        galleryId="mail-gallery"
                                    >
                                        <span className="rui-gallery-item-overlay rui-gallery-item-overlay-md">
                                            <Icon name="maximize" />
                                        </span>
                                        <img src={ settings.letters[ 3 ].img_min } className="rui-img" alt="" />
                                    </FancyBox>
                                </Col>
                            </Row>
                            <div className="rui-gap-2" />
                            <h2>Quick reply</h2>
                            <form action="#">
                                <Row className="vertical-gap sm-gap justify-content-end">
                                    <Col xs={ 12 }>
                                        <TextEditor />
                                    </Col>
                                    <Col xs="auto">
                                        <button className="btn btn-grey-2" type="button">Draft</button>
                                    </Col>
                                    <Col xs="auto">
                                        <button className="btn btn-brand" type="button">Send</button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </div>
                    <div className="d-block d-md-none rui-mailbox-footer">
                        <div className="rui-mailbox-buttons">
                            <ul>
                                <li>
                                    <button type="button" className="btn btn-custom-round">
                                        <Icon name="archive" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="btn btn-custom-round">
                                        <Icon name="alert-octagon" />
                                    </button>
                                </li>
                                <li className="mr-auto">
                                    <button type="button" className="btn btn-custom-round">
                                        <Icon name="trash" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="btn btn-custom-round">
                                        <Icon name="star" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="btn btn-custom-round">
                                        <Icon name="send" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="btn btn-brand btn-uniform btn-round btn-sm">
                                        <Icon name="plus" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
) )( Content );

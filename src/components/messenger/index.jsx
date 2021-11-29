/**
 * Styles
 */
import 'emojionearea/dist/emojionearea.min.css';
import './style.scss';

/**
 * External Dependencies
 */
import 'emojione';
import 'emojionearea';
import classnames from 'classnames/dedupe';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Button } from 'reactstrap';

/**
 * Internal Dependencies
 */
import { initPluginEmojioneArea } from '../../../common-assets/js/rootui-parts/initPluginEmojioneArea';
import { initMessenger } from '../../../common-assets/js/rootui-parts/initMessenger';
import Icon from '../icon';

window.RootUI.initPluginEmojioneArea = initPluginEmojioneArea;
window.RootUI.initMessenger = initMessenger;

window.RootUI.initMessenger();
window.RootUI.initPluginEmojioneArea();

/**
 * Component
 */
class Messenger extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            onlineCollapsed: true,
            offlineCollapsed: false,
        };
    }

    componentDidMount() {
        window.jQuery( window ).trigger( 'rui-ajax-loaded' );
    }

    render() {
        const {
            onlineCollapsed,
            offlineCollapsed,
        } = this.state;

        const {
            settings,
            full,
        } = this.props;

        return (
            <form className={ classnames( 'rui-messenger', full ? 'rui-messenger-full' : 'rui-messenger-mini' ) }>
                <div className="rui-messenger-head">
                    { full ? (
                        <>
                            <div className="rui-messenger-head-search">
                                <div className="input-group rui-messenger-search">
                                    <button type="button" className="btn btn-clean btn-uniform btn-grey-5" data-toggle="button">
                                        <Icon name="search" />
                                    </button>
                                    <input type="search" className="form-control form-control-clean" placeholder="Type to search..." autoComplete="off" />
                                </div>
                            </div>
                            <div className="rui-messenger-head-buttons d-none d-lg-block">
                                <ul>
                                    <li className="mr-auto">
                                        <button type="button" className="btn btn-custom-round">
                                            <Icon name="folder" />
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="btn btn-custom-round">
                                            <Icon name="more-vertical" />
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="btn btn-brand btn-uniform btn-round btn-sm">
                                            <Icon name="plus" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <button className="btn btn-custom-round mr-25 d-flex d-lg-none" type="button">
                                <Icon name="more-vertical" />
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="input-group rui-messenger-search">
                                <button type="button" className="btn btn-clean btn-uniform btn-grey-5" data-toggle="button">
                                    <Icon name="search" />
                                </button>
                                <input type="search" className="form-control form-control-clean" placeholder="Type to search..." autoComplete="off" />
                            </div>
                            <h4 className="mnb-2">Messenger</h4>
                        </>
                    ) }
                </div>
                <div className="rui-messenger-list rui-scrollbar">
                    <Button
                        className={ classnames( 'rui-messenger-collapse-btn', onlineCollapsed ? 'collapsed' : '' ) }
                        href="#"
                        color=""
                        onClick={ ( e ) => {
                            e.preventDefault();

                            this.setState( {
                                onlineCollapsed: ! onlineCollapsed,
                            } );
                        } }
                    >
                        Online
                        <Icon name="chevron-right" />
                    </Button>
                    <Collapse className="rui-messenger-collapse" isOpen={ onlineCollapsed }>
                        <div className={ classnames( 'media media-success media-filled', full ? 'active' : '' ) }>
                            <Link to="#" className="media-link rui-messenger-item">
                                <span className="media-img"><img src={ settings.users[ 4 ].img } alt="" /></span>
                                <span className="media-body">
                                    <span className="media-title">{ settings.users[ 4 ].name }</span>
                                    <small className="media-subtitle">Bring abundantly creature great behold...</small>
                                </span>
                            </Link>
                            <Link to="#" className="media-icon">
                                <Icon name="x" />
                            </Link>
                        </div>
                        <div className="media media-success media-filled">
                            <Link to="#" className="media-link rui-messenger-item">
                                <span className="media-img">F</span>
                                <span className="media-body">
                                    <span className="media-title">Frank Eaton</span>
                                    <small className="media-subtitle">Porttitor facilisis quisque ultrices...</small>
                                </span>
                            </Link>
                            <Link to="#" className="media-icon">
                                <Icon name="x" />
                            </Link>
                        </div>
                    </Collapse>

                    <Button
                        className={ classnames( 'rui-messenger-collapse-btn', offlineCollapsed ? 'collapsed' : '' ) }
                        href="#"
                        color=""
                        onClick={ ( e ) => {
                            e.preventDefault();

                            this.setState( {
                                offlineCollapsed: ! offlineCollapsed,
                            } );
                        } }
                    >
                        Offline
                        <Icon name="chevron-right" />
                    </Button>
                    <Collapse className="rui-messenger-collapse" isOpen={ offlineCollapsed }>
                        <div className="media media-warning media-filled">
                            <Link to="#" className="media-link rui-messenger-item">
                                <span className="media-img"><img src={ settings.users[ 1 ].img } alt="" /></span>
                                <span className="media-body">
                                    <span className="media-title">{ settings.users[ 1 ].name }</span>
                                    <small className="media-subtitle">Upon us after sixth, under is appear...</small>
                                </span>
                            </Link>
                            <Link to="#" className="media-icon">
                                <Icon name="x" />
                            </Link>
                        </div>
                        <div className="media media-warning media-filled">
                            <Link to="#" className="media-link rui-messenger-item">
                                <span className="media-img">S</span>
                                <span className="media-body">
                                    <span className="media-title">Steven Cross</span>
                                    <small className="media-subtitle">Us earth our sixth cattle great without...</small>
                                </span>
                            </Link>
                            <Link to="#" className="media-icon">
                                <Icon name="x" />
                            </Link>
                        </div>
                    </Collapse>
                </div>
                <div className="rui-messenger-footer">
                    <button type="button" className="btn btn-custom-round">
                        <Icon name="more-vertical" />
                    </button>
                    <button type="button" className="btn btn-brand btn-uniform btn-round btn-sm">
                        <Icon name="plus" />
                    </button>
                </div>
                <div className="rui-messenger-chat">
                    <div className="rui-messenger-head">
                        <Link to="#" className={ classnames( 'btn btn-clean btn-uniform btn-grey-5 rui-messenger-back', full ? 'd-flex d-lg-none' : '' ) }>
                            <Icon name="chevron-left" />
                        </Link>
                        <h4 className="mnb-4">{ settings.users[ 4 ].name }</h4>
                        { full ? (
                            <button type="button" className="btn btn-custom-round d-flex d-lg-none">
                                <Icon name="more-vertical" />
                            </button>
                        ) : (
                            <div className="rui-messenger-head-empty" />
                        ) }
                    </div>
                    <div className="rui-messenger-body rui-scrollbar">
                        <div>
                            <div className="rui-messenger-message rui-messenger-message-structure">
                                <ul>
                                    <li />
                                </ul>
                                <div className="rui-messenger-message-edit">
                                    <Link to="#" className="btn">
                                        <Icon name="edit2" />
                                    </Link>
                                    <Link to="#" className="btn">
                                        <Icon name="trash" />
                                    </Link>
                                </div>
                                <small className="rui-messenger-message-time" />
                            </div>
                            <small className="rui-messenger-message-datetime">2 days ago</small>
                            <div className="rui-messenger-message rui-messenger-message-incoming">
                                <ul>
                                    <li>
                                        The last album.
                                    </li>
                                    <li>
                                        I can’t open the last album!
                                    </li>
                                </ul>
                                <small className="rui-messenger-message-time">10:19</small>
                            </div>
                            <div className="rui-messenger-message rui-messenger-message-incoming">
                                <ul>
                                    <li>
                                        Gues, I can’t open the last album...
                                    </li>
                                </ul>
                                <small className="rui-messenger-message-time">10:20</small>
                            </div>
                            <small className="rui-messenger-message-datetime">Today</small>
                            <div className="rui-messenger-message">
                                <ul>
                                    <li>
                                        123
                                    </li>
                                </ul>
                                <small className="rui-messenger-message-time">10:29</small>
                                <div className="rui-messenger-message-edit">
                                    <Link to="#" className="btn">
                                        <Icon name="edit2" />
                                    </Link>
                                    <Link to="#" className="btn">
                                        <Icon name="trash" />
                                    </Link>
                                </div>
                            </div>
                            <div className="rui-messenger-message">
                                <ul>
                                    <li>
                                        Haha Amber! You are so nice! :smile:
                                    </li>
                                </ul>
                                <small className="rui-messenger-message-time">10:30</small>
                                <div className="rui-messenger-message-edit">
                                    <Link to="#" className="btn">
                                        <Icon name="edit2" />
                                    </Link>
                                    <Link to="#" className="btn">
                                        <Icon name="trash" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rui-messenger-footer">
                        <div className="input-group mnt-10 mnb-10">
                            <div className="input-group-prepend mnl-2">
                                <input type="file" className="rui-messenger-custom-file" id="customFileLang" lang="es" />
                                { /* eslint-disable-next-line */ }
                                <label className="btn btn-clean btn-uniform btn-grey-5 mb-0" htmlFor="customFileLang">
                                    <Icon name="paperclip" />
                                </label>
                            </div>
                            <textarea className="form-control form-control-clean rui-messenger-textarea" placeholder="Write a message..." />
                            <div className="input-group-append ml-2">
                                <Link to="#" className="btn btn-clean btn-uniform btn-grey-5 rui-messenger-send">
                                    <Icon name="send" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Messenger;

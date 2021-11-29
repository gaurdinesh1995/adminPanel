/**
 * Styles
 */
import './style.scss';

/**
 * External Dependencies
 */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Icon from '../icon';

/**
 * Component
 *
 * @param {Object} props component props.
 * @return {Object} component.
 */
const PagePopupSearch = ( props ) => {
    const {
        settings,
    } = props;

    return (
        <div className="rui-search">
            <div className="rui-search-head">
                <form action="#">
                    <div className="input-group">
                        <input type="search" className="form-control form-control-clean order-12" placeholder="Type to search..." />
                        <div className="input-group-prepend mnl-3 order-1">
                            <button type="button" className="btn btn-clean btn-uniform btn-grey-5 mb-0 mnl-10">
                                <Icon name="search" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="rui-search-body">
                <div className="row vertical-gap">
                    <div className="col-12 col-md-6 col-lg-4">
                        <h4>Members</h4>
                        <Link to="#" className="media media-success">
                            <span className="media-img"><img src={ settings.users[ 1 ].img } alt="" /></span>
                            <span className="media-body">
                                <span className="media-title">{ settings.users[ 1 ].name }</span>
                                <small className="media-subtitle">Content Manager</small>
                            </span>
                        </Link>
                        <Link to="#" className="media media-warning">
                            <span className="media-img"><img src={ settings.users[ 2 ].img } alt="" /></span>
                            <span className="media-body">
                                <span className="media-title">{ settings.users[ 2 ].name }</span>
                                <small className="media-subtitle">Support</small>
                            </span>
                        </Link>
                        <Link to="#" className="media media-success">
                            <span className="media-img"><img src={ settings.users[ 3 ].img } alt="" /></span>
                            <span className="media-body">
                                <span className="media-title">{ settings.users[ 3 ].name }</span>
                                <small className="media-subtitle">Programmer</small>
                            </span>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <h4>Articles</h4>
                        <Link to="#" className="media">
                            <span className="media-img">M</span>
                            <span className="media-body">
                                <span className="media-title">Minimal Design</span>
                                <small className="media-subtitle">Be life tree every behold fish</small>
                            </span>
                        </Link>
                        <Link to="#" className="media">
                            <span className="media-img">
                                <Icon name="heart" />
                            </span>
                            <span className="media-body">
                                <span className="media-title">Admin Dashboard</span>
                                <small className="media-subtitle">Fruit their us also rule one multiply</small>
                            </span>
                        </Link>
                        <Link to="#" className="media">
                            <span className="media-img">R</span>
                            <span className="media-body">
                                <span className="media-title">Responsive Design</span>
                                <small className="media-subtitle">Behold, to all own, one all fruitful let</small>
                            </span>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <h4>Files</h4>
                        <Link to="#" className="media">
                            <span className="media-img bg-transparent"><img src={ settings.img_file.zip } className="icon-file" alt="" /></span>
                            <span className="media-body">
                                <span className="media-title">Dashboard</span>
                                <small className="media-subtitle">Admin &amp; Dashboard</small>
                            </span>
                        </Link>
                        <Link to="#" className="media">
                            <span className="media-img bg-transparent"><img src={ settings.img_file.jpg } className="icon-file" alt="" /></span>
                            <span className="media-body">
                                <span className="media-title">Application</span>
                                <small className="media-subtitle">Application</small>
                            </span>
                        </Link>
                        <Link to="#" className="media">
                            <span className="media-img bg-transparent"><img src={ settings.img_file.png } className="icon-file" alt="" /></span>
                            <span className="media-body">
                                <span className="media-title">Marketing</span>
                                <small className="media-subtitle">Landing &amp; Corporate</small>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PagePopupSearch;

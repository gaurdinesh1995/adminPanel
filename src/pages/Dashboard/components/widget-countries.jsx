/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Widget from '../../../components/widget';

class WidgetCountries extends Component {
    render() {
        const { settings } = this.props;

        return (
            <Widget>
                <div className="rui-widget-content">
                    <ul className="list-group list-group-flush rui-widget-list rui-widget-country-list rui-scrollbar">
                        <li className="list-group-item">
                            <div className="media media-filled media-country active">
                                <Link to="#" className="media-link">
                                    <div className="media-img">
                                        <img src={ settings.img_country.usa } alt="" />
                                    </div>
                                    <div className="media-body">
                                        <div className="media-title">United States</div>
                                        <div className="media-country-price">$277,203</div>
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media media-filled media-country">
                                <Link to="#" className="media-link">
                                    <div className="media-img">
                                        <img src={ settings.img_country.germany } alt="" />
                                    </div>
                                    <div className="media-body">
                                        <div className="media-title">Germany</div>
                                        <div className="media-country-price">$192,800</div>
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media media-filled media-country">
                                <Link to="#" className="media-link">
                                    <div className="media-img">
                                        <img src={ settings.img_country.france } alt="" />
                                    </div>
                                    <div className="media-body">
                                        <div className="media-title">France</div>
                                        <div className="media-country-price">$137,284</div>
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media media-filled media-country">
                                <Link to="#" className="media-link">
                                    <div className="media-img">
                                        <img src={ settings.img_country.canada } alt="" />
                                    </div>
                                    <div className="media-body">
                                        <div className="media-title">Canada</div>
                                        <div className="media-country-price">$96,892</div>
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media media-filled media-country">
                                <Link to="#" className="media-link">
                                    <div className="media-img">
                                        <img src={ settings.img_country.canada } alt="" />
                                    </div>
                                    <div className="media-body">
                                        <div className="media-title">Netherlands</div>
                                        <div className="media-country-price">$43,172</div>
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media media-filled media-country">
                                <Link to="#" className="media-link">
                                    <div className="media-img">
                                        <img src={ settings.img_country.italy } alt="" />
                                    </div>
                                    <div className="media-body">
                                        <div className="media-title">Italy</div>
                                        <div className="media-country-price">$38,882</div>
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media media-filled media-country">
                                <Link to="#" className="media-link">
                                    <div className="media-img">
                                        <img src={ settings.img_country.russia } alt="" />
                                    </div>
                                    <div className="media-body">
                                        <div className="media-title">Russia</div>
                                        <div className="media-country-price">$12,182</div>
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media media-filled media-country">
                                <Link to="#" className="media-link">
                                    <div className="media-img">
                                        <img src={ settings.img_country.czech_republic } alt="" />
                                    </div>
                                    <div className="media-body">
                                        <div className="media-title">Czech Republic</div>
                                        <div className="media-country-price">$2,278</div>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </Widget>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
) )( WidgetCountries );

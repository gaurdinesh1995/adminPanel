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

class WidgetCPU extends Component {
    render() {
        const {
            settings,
        } = this.props;

        return (
            <Widget title="Latest Uploads" className="rui-widget-actions" showDropdown>
                <div className="rui-widget-content">
                    <ul className="list-group list-group-flush rui-widget-list">
                        <li className="list-group-item">
                            <div className="media media-filled">
                                <Link to="#" className="media-link">
                                    <span className="media-img bg-transparent"><img src={ settings.img_file.zip } className="icon-file" alt="" /></span>
                                    <span className="media-body">
                                        <span className="media-title">
                                            Added banner archive
                                            <span className="media-time">08:31</span>
                                        </span>
                                        <small className="media-subtitle">Commerce</small>
                                    </span>
                                </Link>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media media-filled">
                                <Link to="#" className="media-link">
                                    <span className="media-img bg-transparent"><img src={ settings.img_file.zip } className="icon-file" alt="" /></span>
                                    <span className="media-body">
                                        <span className="media-title">
                                            Sensific-1.2.0.zip
                                            <span className="media-time">10:24</span>
                                        </span>
                                        <small className="media-subtitle">Template</small>
                                    </span>
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
) )( WidgetCPU );

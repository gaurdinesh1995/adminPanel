/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Widget from '../../../components/widget';

class WidgetTasks extends Component {
    render() {
        return (
            <Widget title="Activity" className="rui-widget-actions" showDropdown>
                <div className="rui-widget-content">
                    <ul className="list-group list-group-flush rui-widget-list">
                        <li className="list-group-item">
                            <div className="media media-filled">
                                <Link to="#" className="media-link active">
                                    <span className="media-img">P</span>
                                    <span className="media-body">
                                        <span className="media-title">[Project] Release Version 1.2.0</span>
                                        <small className="media-subtitle">Jul 05, 2020 10:22 — created</small>
                                    </span>
                                </Link>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media media-filled">
                                <Link to="#" className="media-link active">
                                    <span className="media-img">H</span>
                                    <span className="media-body">
                                        <span className="media-title">[Hotfix] Error login page</span>
                                        <small className="media-subtitle">Jul 04, 2020 10:38 — created</small>
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

export default WidgetTasks;

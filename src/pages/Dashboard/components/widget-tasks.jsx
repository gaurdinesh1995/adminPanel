/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Icon from '../../../components/icon';
import Widget from '../../../components/widget';

class WidgetTasks extends Component {
    render() {
        return (
            <Widget title="Latest Tasks" className="rui-widget-actions" showDropdown>
                <div className="rui-widget-content">
                    <ul className="list-group list-group-flush rui-widget-list rui-widget-task-list">
                        <li className="list-group-item">
                            <div className="rui-task rui-task-success">
                                <div className="rui-task-icon">
                                    <Icon name="alert-circle" />
                                </div>
                                <div className="rui-task-content">
                                    <Link className="rui-task-title" to="/task">Cattle whose. There isn&apos;t cattle rule said</Link>
                                    <small className="rui-task-subtitle">
                                        #12 opened 4 days ago by
                                        { ' ' }
                                        <Link to="#">Henry</Link>
                                    </small>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="rui-task rui-task-success">
                                <div className="rui-task-icon">
                                    <Icon name="alert-circle" />
                                </div>
                                <div className="rui-task-content">
                                    <Link className="rui-task-title" to="/task">Was living rule Him created a to</Link>
                                    <small className="rui-task-subtitle">
                                        #11 opened 21 days ago by
                                        { ' ' }
                                        <Link to="#">Henry</Link>
                                    </small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Widget>
        );
    }
}

export default WidgetTasks;

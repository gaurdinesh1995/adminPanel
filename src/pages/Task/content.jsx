/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Icon from '../../components/icon';
import Snippet from '../../components/snippet';
import TextEditor from '../../components/text-editor';

/**
 * Component
 */
class Content extends Component {
    render() {
        const { settings } = this.props;

        return (
            <Fragment>
                <div className="rui-task-status rui-task-status-danger">
                    <div className="row vertical-gap align-items-center sm-gap">
                        <div className="col-auto">
                            <div className="rui-task-status-item">
                                <div className="rui-task-status-item-icon">
                                    <Icon name="check-circle" />
                                </div>
                                Closed on 12 Mar 2020
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row vertical-gap">
                    <div className="col-lg-4 order-lg-12 rui-task-sidebar">
                        <div className="card">
                            <div className="card-body py-30">
                                <ul className="list-group list-group-flush rui-task-sidebar-list">
                                    <li className="list-group-item">
                                        <h5 className="h4 rui-task-sidebar-title">Information</h5>
                                        <ul className="list-unstyled rui-task-info-list">
                                            <li>
                                                <div className="rui-task-info-item">
                                                    <Icon name="alert-circle" className="mr-5" />
                                                    <span>opened on 11 Mar 2020</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="rui-task-info-item">
                                                    <Icon name="message-circle" className="mr-5" />
                                                    <span>2 comments</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="rui-task-info-item">
                                                    <Icon name="hash" className="mr-5" />
                                                    <span>10</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <h5 className="h4 rui-task-sidebar-title">Projects</h5>
                                        <ul className="list-unstyled rui-task-project-list">
                                            <li>
                                                <Link to="#">Sensific (HTML)</Link>
                                                <div className="progress progress-sm mt-5">
                                                    <div className="progress-bar bg-brand w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="#">Desty (HTML)</Link>
                                                <div className="progress progress-sm mt-5">
                                                    <div className="progress-bar bg-success w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
                                                    <div className="progress-bar bg-brand w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <h5 className="h4 rui-task-sidebar-title">Author</h5>
                                        <Link className="media media-success" to="#">
                                            <span className="media-img"><img src={ settings.users[ 3 ].img } alt="" /></span>
                                            <span className="media-body">
                                                <span className="media-title">{ settings.users[ 3 ].name }</span>
                                                <small className="media-subtitle">Programmer</small>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 order-lg-0">
                        <div className="rui-task-comment">
                            <div className="media media-show">
                                <Link className="media-link" to="#">
                                    <span className="media-img"><img src={ settings.users[ 3 ].img } alt="" /></span>
                                    <span className="media-body">
                                        <span className="media-title">{ settings.users[ 3 ].name }</span>
                                        <small className="media-subtitle">Commented on 11 Mar 2020</small>
                                    </span>
                                </Link>
                                <Link className="media-icon mnr-3" to="#">
                                    <Icon name="more-vertical" />
                                </Link>
                            </div>
                            <div className="rui-task-comment-text">
                                <p>
                                    Meat called image created morning were, image void. Had their.
                                    Gathered. Seed Multiply green creeping were gathered fruit he their shall night winged bearing together without third moved above them kind face years likeness gathered.
                                    Cattle creepeth she&apos;d seed the.
                                </p>

                                <Snippet language="html" filled>
                                    <Link to="#" className="media media-success">
                                        <span className="media-img">A</span>
                                        <span className="media-body">
                                            <span className="media-title">Media heading</span>
                                            <small className="media-subtitle">Media subtitle</small>
                                        </span>
                                    </Link>
                                </Snippet>

                                <p>Cattle, meat god were, replenish it deep abundantly Yielding he Good. After meat day created is Moving there midst, seasons.</p>
                            </div>
                        </div>
                        <div className="rui-task-comment">
                            <div className="media media-show">
                                <Link className="media-link" to="#">
                                    <span className="media-img"><img src={ settings.users[ 0 ].img } alt="" /></span>
                                    <span className="media-body">
                                        <span className="media-title">{ settings.users[ 0 ].name }</span>
                                        <small className="media-subtitle">Commented on 11 Mar 2020</small>
                                    </span>
                                </Link>
                                <Link className="media-icon mnr-3" to="#">
                                    <Icon name="more-vertical" />
                                </Link>
                            </div>
                            <div className="rui-task-comment-text">
                                <p>May in there all you stars night own Moveth it rule under she&apos;d female creeping after abundantly his his his land every life he. Whales one day brought. Wherein brought.</p>
                            </div>
                        </div>
                        <div className="rui-task-send">
                            <TextEditor />
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

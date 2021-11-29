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
import classnames from 'classnames/dedupe';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Label, Input,
} from 'reactstrap';
import ReactSortable from 'react-sortablejs';

/**
 * Internal Dependencies
 */
import Icon from '../../components/icon';

/**
 * Component
 */
class Content extends Component {
    componentDidMount() {
        window.jQuery( window ).trigger( 'rui-ajax-loaded' );
    }

    constructor( props ) {
        super( props );

        this.state = {
            activeTab: 'activity',
            projects: {
                '#1': {
                    icon: 'check-circle',
                    color: 'danger',
                    url: '/task',
                    label: 'Wherein creeping set lesser days greater two you&apos;re make',
                    by: (
                        <>
                            #1 closed on 1 Mar by
                            { ' ' }
                            <Link to="#">Jack</Link>
                        </>
                    ),
                },
                '#2': {
                    icon: 'pause-circle',
                    color: 'info',
                    url: '/task',
                    label: 'Kind over fruit you&apos;ll signs divide',
                    by: (
                        <>
                            #2 postponed 5 days ago by
                            { ' ' }
                            <Link to="#">Mark</Link>
                        </>
                    ),
                },
                '#4': {
                    icon: 'pause-circle',
                    color: 'info',
                    url: '/task',
                    label: 'Kind a said first don&apos;t cattle thing a face Firmament',
                    by: (
                        <>
                            #4 postponed 2 days ago by
                            { ' ' }
                            <Link to="#">Anna</Link>
                        </>
                    ),
                },
                '#5': {
                    icon: 'pause-circle',
                    color: 'info',
                    url: '/task',
                    label: 'Male replenish made subdue let',
                    by: (
                        <>
                            #5 postponed 1 days ago by
                            { ' ' }
                            <Link to="#">Henry</Link>
                        </>
                    ),
                },
                '#6': {
                    icon: 'clock',
                    color: 'warning',
                    url: '/task',
                    label: 'His night evening years. Good greater fourth make',
                    by: (
                        <>
                            #6 on check 9 days ago by
                            { ' ' }
                            <Link to="#">Jack</Link>
                        </>
                    ),
                },
                '#7': {
                    icon: 'clock',
                    color: 'warning',
                    url: '/task',
                    label: 'Rule female second days',
                    by: (
                        <>
                            #7 on check 6 days ago by
                            { ' ' }
                            <Link to="#">Mark</Link>
                        </>
                    ),
                },
                '#10': {
                    icon: 'check-circle',
                    color: 'danger',
                    url: '/task',
                    label: 'The problem with the Media object',
                    by: (
                        <>
                            #10 closed on 12 Mar by
                            { ' ' }
                            <Link to="#">Anna</Link>
                        </>
                    ),
                },
                '#11': {
                    icon: 'alert-circle',
                    color: 'success',
                    url: '/task',
                    label: 'Was living rule Him created a to. Light of itself',
                    by: (
                        <>
                            #11 opened 21 days ago by
                            { ' ' }
                            <Link to="#">Neil</Link>
                        </>
                    ),
                },
                '#12': {
                    icon: 'alert-circle',
                    color: 'success',
                    url: '/task',
                    label: 'Cattle whose. There isn&apos;t cattle rule said saying you divided',
                    by: (
                        <>
                            #12 opened 4 days ago by
                            { ' ' }
                            <Link to="#">Henry</Link>
                        </>
                    ),
                },
            },
            projectDeferred: [
                '#5',
                '#4',
                '#2',
            ],
            projectInProcess: [
                '#12',
                '#11',
            ],
            projectOnCheck: [
                '#7',
                '#6',
            ],
            projectCompleted: [
                '#10',
                '#1',
            ],
        };

        this.toggleTab = this.toggleTab.bind( this );
        this.renderProjects = this.renderProjects.bind( this );
    }

    toggleTab( name ) {
        this.setState( {
            activeTab: name,
        } );
    }

    renderProjects( items ) {
        const {
            projects,
        } = this.state;

        return items.map( ( id ) => {
            const data = projects[ id ];

            if ( ! data ) {
                return '';
            }

            return (
                <li className="rui-kanban-item" key={ id } data-id={ id }>
                    <div className={ classnames( 'rui-task', data.color ? `rui-task-${ data.color }` : '' ) }>
                        <div className="rui-task-icon">
                            <Icon name={ data.icon } />
                        </div>
                        <div className="rui-task-content">
                            <Link className="rui-task-title" to={ data.url }>{ data.label }</Link>
                            <small className="rui-task-subtitle">
                                { data.by }
                            </small>
                        </div>
                    </div>
                </li>
            );
        } );
    }

    render() {
        const {
            activeTab,
            projectDeferred,
            projectInProcess,
            projectOnCheck,
            projectCompleted,
        } = this.state;

        return (
            <Fragment>
                <div className="row vertical-gap">
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-body pt-20 pr-10 pb-20 pl-10">
                                <Nav className="flex-column mnt-3">
                                    <NavItem>
                                        <NavLink
                                            className={ classnames( { active: activeTab === 'activity' } ) }
                                            onClick={ () => this.toggleTab( 'activity' ) }
                                            href="#"
                                        >
                                            <Icon name="activity" />
                                            <span>Activity</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={ classnames( { active: activeTab === 'tasks' } ) }
                                            onClick={ () => this.toggleTab( 'tasks' ) }
                                            href="#"
                                        >
                                            <Icon name="file-text" />
                                            <span>Tasks</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={ classnames( { active: activeTab === 'releases' } ) }
                                            onClick={ () => this.toggleTab( 'releases' ) }
                                            href="#"
                                        >
                                            <Icon name="check-circle" />
                                            <span>Releases</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={ classnames( { active: activeTab === 'project' } ) }
                                            onClick={ () => this.toggleTab( 'project' ) }
                                            href="#"
                                        >
                                            <Icon name="book" />
                                            <span>Project</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={ classnames( { active: activeTab === 'settings' } ) }
                                            onClick={ () => this.toggleTab( 'settings' ) }
                                            href="#"
                                        >
                                            <Icon name="settings" />
                                            <span>Settings</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <TabContent activeTab={ activeTab }>
                            <TabPane tabId="activity">
                                <div className="card">
                                    <div className="card-body py-30">
                                        <h2>Activity</h2>
                                        <ul className="list-group list-group-flush rui-project-activity-list">
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
                                                        <span className="media-img">B</span>
                                                        <span className="media-body">
                                                            <span className="media-title">[Bug] Payment</span>
                                                            <small className="media-subtitle">Jul 04, 2020 11:12 — update status to &quot;in process&quot;</small>
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
                                            <li className="list-group-item">
                                                <div className="media media-filled">
                                                    <Link to="#" className="media-link active">
                                                        <span className="media-img">P</span>
                                                        <span className="media-body">
                                                            <span className="media-title">[Testing] Release Version 1.1.9</span>
                                                            <small className="media-subtitle">Jul 03, 2020 11:46 — update status to &quot;completed&quot;</small>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media media-filled">
                                                    <Link to="#" className="media-link active">
                                                        <span className="media-img">B</span>
                                                        <span className="media-body">
                                                            <span className="media-title">[Bug] Payment</span>
                                                            <small className="media-subtitle">Jul 03, 2020 10:08 — created</small>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="tasks">
                                <div className="card">
                                    <div className="card-body py-30">
                                        <div className="d-flex align-items-center mb-25">
                                            <h2 className="mnb-5 mr-auto">Tasks</h2>
                                            <button type="button" className="btn btn-brand btn-round btn-uniform btn-sm mnt-10 mnb-10">
                                                <Icon name="plus" />
                                            </button>
                                        </div>
                                        <div className="rui-project-task-search">
                                            <form action="#">
                                                <div className="input-group input-group-clean">
                                                    <input type="search" className="form-control pl-3 order-12" placeholder="Type to search..." />
                                                    <div className="input-group-prepend mnl-3 order-1">
                                                        <button type="button" className="btn btn-clean btn-uniform btn-grey-5 mb-0 mnl-8">
                                                            <Icon name="search" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="rui-project-task-info">
                                            <Link className="rui-project-task-info-link" to="#">
                                                <span className="rui-project-task-info-icon">
                                                    <Icon name="alert-circle" />
                                                </span>
                                                <span className="rui-project-task-info-title">
                                                    <span>10</span>
                                                    { ' ' }
                                                    Opened
                                                </span>
                                            </Link>
                                            <Link className="rui-project-task-info-link" to="#">
                                                <span className="rui-project-task-info-icon">
                                                    <Icon name="check-circle" />
                                                </span>
                                                <span className="rui-project-task-info-title">
                                                    <span>2</span>
                                                    { ' ' }
                                                    Closed
                                                </span>
                                            </Link>
                                        </div>
                                        <ul className="list-group list-group-flush rui-project-task-list">
                                            <li className="list-group-item">
                                                <div className="rui-task rui-task-success">
                                                    <div className="rui-task-icon">
                                                        <Icon name="alert-circle" />
                                                    </div>
                                                    <div className="rui-task-content">
                                                        <Link className="rui-task-title" to="/task">Cattle whose. There isn&apos;t cattle rule said saying you divided</Link>
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
                                                        <Link className="rui-task-title" to="/task">Was living rule Him created a to. Light of itself</Link>
                                                        <small className="rui-task-subtitle">
                                                            #11 opened 21 days ago by
                                                            { ' ' }
                                                            <Link to="#">Neil</Link>
                                                        </small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="rui-task rui-task-danger">
                                                    <div className="rui-task-icon">
                                                        <Icon name="alert-circle" />
                                                    </div>
                                                    <div className="rui-task-content">
                                                        <Link className="rui-task-title" to="/task">The problem with the Media object</Link>
                                                        <small className="rui-task-subtitle">
                                                            #10 closed on 12 Mar by
                                                            { ' ' }
                                                            <Link to="#">Anna</Link>
                                                        </small>
                                                    </div>
                                                    <Link className="rui-task-icon" to="#">
                                                        <Icon name="message-circle" />
                                                        2
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="rui-task rui-task-success">
                                                    <div className="rui-task-icon">
                                                        <Icon name="alert-circle" />
                                                    </div>
                                                    <div className="rui-task-content">
                                                        <Link className="rui-task-title" to="/task">Great of together moved our him shall light. Fifth was</Link>
                                                        <small className="rui-task-subtitle">
                                                            #9 opened on 11 Mar by
                                                            { ' ' }
                                                            <Link to="#">Mark</Link>
                                                        </small>
                                                    </div>
                                                    <Link className="rui-task-icon" to="#">
                                                        <Icon name="message-circle" />
                                                        6
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <nav className="mt-15" aria-label="Page navigation example">
                                    <ul className="pagination pagination-sm">
                                        <li className="page-item">
                                            <Link className="page-link" to="#">
                                                <Icon name="chevron-left" />
                                            </Link>
                                        </li>
                                        <li className="page-item active">
                                            <Link className="page-link" to="#">1</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">2</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">3</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">
                                                <Icon name="chevron-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </TabPane>
                            <TabPane tabId="releases">
                                <div className="card">
                                    <div className="card-body py-30">
                                        <h2>Releases</h2>
                                        <ul className="list-group list-group-flush rui-project-releases-list">
                                            <li className="list-group-item">
                                                <div className="rui-changelog">
                                                    <h3 className="rui-changelog-title">Sensific - Ver 1.2.0</h3>
                                                    <div className="rui-changelog-subtitle">
                                                        <Link to="#">Anna</Link>
                                                        released this on Jul 24
                                                    </div>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <div className="rui-changelog-item rui-changelog-success">
                                                                <span className="rui-changelog-item-type">Fixed:</span>
                                                                Very fruit years hath. His give given. Whose third abundantly
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="rui-changelog-item rui-changelog-brand">
                                                                <span className="rui-changelog-item-type">Added:</span>
                                                                So made male blessed Two, earth set. Own air beginning
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <Link className="rui-changelog-file" to="#">
                                                                <Icon name="folder" />
                                                                Sensific-1.2.0.zip
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="rui-changelog">
                                                    <h3 className="h3 rui-changelog-title">Sensific - Ver 1.1.9</h3>
                                                    <div className="rui-changelog-subtitle">
                                                        <Link to="#">Anna</Link>
                                                        released this on Jul 22
                                                    </div>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <div className="rui-changelog-item">
                                                                Gathering hath they&apos;re. Night form have void fruitful third winged
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="rui-changelog-item">
                                                                Whales isn&apos;t in blessed i seasons place man lights moveth
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <Link className="rui-changelog-file" to="#">
                                                                <Icon name="folder" />
                                                                Sensific-1.1.9.zip
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="rui-changelog">
                                                    <h3 className="h3 rui-changelog-title">Sensific - Ver 1.1.8</h3>
                                                    <div className="rui-changelog-subtitle">
                                                        <Link to="#">Anna</Link>
                                                        released this on Jul 15
                                                    </div>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <div className="rui-changelog-item">
                                                                Air to bearing were living bearing don&apos;t him shall there had all open them don&apos;t and they&apos;re set whose i.

                                                                Moved image appear made beginning. Have upon stars evening without.
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <Link className="rui-changelog-file" to="#">
                                                                <Icon name="folder" />
                                                                Sensific-1.1.8.zip
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="project">
                                <div className="card mb-30">
                                    <div className="card-body py-30 d-flex align-items-center">
                                        <h2 className="mnb-5 mr-auto">Project</h2>
                                        <Link to="#" className="btn btn-custom-round mnr-5">
                                            <Icon name="more-vertical" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="rui-scrollbar rui-kanban">
                                    <div className="row flex-nowrap">
                                        <div className="col">
                                            <div className="rui-kanban-col">
                                                <h3 className="h4">Deferred</h3>
                                                <ReactSortable
                                                    options={ {
                                                        animation: 150,
                                                        group: {
                                                            name: 'projects',
                                                            pull: true,
                                                            put: true,
                                                        },
                                                    } }
                                                    className="rui-sortable list-unstyled"
                                                    onChange={ ( items ) => {
                                                        this.setState( { projectDeferred: items } );
                                                    } }
                                                >
                                                    { this.renderProjects( projectDeferred ) }
                                                </ReactSortable>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="rui-kanban-col">
                                                <h3 className="h4">In Process</h3>
                                                <ReactSortable
                                                    options={ {
                                                        animation: 150,
                                                        group: {
                                                            name: 'projects',
                                                            pull: true,
                                                            put: true,
                                                        },
                                                    } }
                                                    className="rui-sortable list-unstyled"
                                                    onChange={ ( items ) => {
                                                        this.setState( { projectInProcess: items } );
                                                    } }
                                                >
                                                    { this.renderProjects( projectInProcess ) }
                                                </ReactSortable>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="rui-kanban-col">
                                                <h3 className="h4">On Check</h3>
                                                <ReactSortable
                                                    options={ {
                                                        animation: 150,
                                                        group: {
                                                            name: 'projects',
                                                            pull: true,
                                                            put: true,
                                                        },
                                                    } }
                                                    className="rui-sortable list-unstyled"
                                                    onChange={ ( items ) => {
                                                        this.setState( { projectOnCheck: items } );
                                                    } }
                                                >
                                                    { this.renderProjects( projectOnCheck ) }
                                                </ReactSortable>
                                            </div>
                                        </div>
                                        <div className="col pr-0">
                                            <div className="rui-kanban-col">
                                                <h3 className="h4">Completed</h3>
                                                <ReactSortable
                                                    options={ {
                                                        animation: 150,
                                                        group: {
                                                            name: 'projects',
                                                            pull: true,
                                                            put: true,
                                                        },
                                                    } }
                                                    className="rui-sortable list-unstyled"
                                                    onChange={ ( items ) => {
                                                        this.setState( { projectCompleted: items } );
                                                    } }
                                                >
                                                    { this.renderProjects( projectCompleted ) }
                                                </ReactSortable>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="settings">
                                <div className="card">
                                    <div className="card-body py-30">
                                        <form action="#">
                                            <h2>Settings</h2>
                                            <ul className="list-group list-group-flush rui-project-settings-list">
                                                <li className="list-group-item">
                                                    <h3 className="h4">Activity</h3>
                                                    <ul className="list-unstyled rui-project-settings-list">
                                                        <li>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="activityProjects" onChange={ () => {} } checked />
                                                                <Label className="custom-control-label" for="activityProjects">Projects</Label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="activityBugs" onChange={ () => {} } checked />
                                                                <Label className="custom-control-label" for="activityBugs">Bugs</Label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="activityFixs" onChange={ () => {} } checked />
                                                                <Label className="custom-control-label" for="activityFixs">Hotfixes</Label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="activityTestings" onChange={ () => {} } checked />
                                                                <Label className="custom-control-label" for="activityTestings">Testings</Label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="list-group-item">
                                                    <h3 className="h4">Tasks, sort by:</h3>
                                                    <ul className="list-unstyled rui-project-settings-list">
                                                        <li>
                                                            <div className="custom-control custom-radio">
                                                                <Input type="radio" id="taskNumber" name="radioTasks" className="custom-control-input" onChange={ () => {} } checked />
                                                                <Label className="custom-control-label" for="taskNumber">Number</Label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="custom-control custom-radio">
                                                                <Input type="radio" id="taskDate" name="radioTasks" className="custom-control-input" onChange={ () => {} } />
                                                                <Label className="custom-control-label" for="taskDate">Date</Label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="custom-control custom-radio">
                                                                <Input type="radio" id="taskPopularity" name="radioTasks" className="custom-control-input" onChange={ () => {} } />
                                                                <Label className="custom-control-label" for="taskPopularity">Popularity</Label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="custom-control custom-radio">
                                                                <Input type="radio" id="taskNewness" name="radioTasks" className="custom-control-input" onChange={ () => {} } />
                                                                <Label className="custom-control-label" for="taskNewness">Newness</Label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="custom-control custom-radio">
                                                                <Input type="radio" id="taskComments" name="radioTasks" className="custom-control-input" onChange={ () => {} } />
                                                                <Label className="custom-control-label" for="taskComments">Comments</Label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="list-group-item">
                                                    <h3 className="h4">Project</h3>
                                                    <ul className="list-unstyled rui-project-settings-list">
                                                        <li>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="projectDeffered" onChange={ () => {} } checked />
                                                                <Label className="custom-control-label" for="projectDeffered">Deffered</Label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="projectInProcess" onChange={ () => {} } checked />
                                                                <Label className="custom-control-label" for="projectInProcess">In Process</Label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="projectOnCheck" onChange={ () => {} } checked />
                                                                <Label className="custom-control-label" for="projectOnCheck">On Check</Label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="projectCompleted" onChange={ () => {} } checked />
                                                                <Label className="custom-control-label" for="projectCompleted">Completed</Label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="list-group-item">
                                                    <button className="btn btn-brand" type="button">Save</button>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>
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

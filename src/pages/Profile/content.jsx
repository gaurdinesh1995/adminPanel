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
import {
    Label, Input,
} from 'reactstrap';

/**
 * Internal Dependencies
 */
import Icon from '../../components/icon';
import FancyBox from '../../components/fancybox';
import Tabs from '../../components/tabs';
import Timeline from '../../components/timeline';

/**
 * Component
 */
class Content extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            activeTab: 'activity',
        };

        this.toggleTab = this.toggleTab.bind( this );
    }

    toggleTab( name ) {
        this.setState( {
            activeTab: name,
        } );
    }

    render() {
        const {
            activeTab,
        } = this.state;

        const { settings } = this.props;

        return (
            <Fragment>
                <div className="rui-profile row vertical-gap">
                    <div className="col-lg-6 col-xl-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="row vertical-gap">
                                    <div className="col-auto">
                                        <div className="rui-profile-img">
                                            <img src={ settings.users[ 0 ].img_profile } alt="" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="rui-profile-info">
                                            <h3 className="rui-profile-info-title h4">{ settings.users[ 0 ].name }</h3>
                                            <small className="text-grey-6 mt-2 mb-15">Senior account manager</small>
                                            <Link className="rui-profile-info-mail" to="#">info@example.com</Link>
                                            <Link className="rui-profile-info-phone" to="#">+44 987 065 909</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="rui-profile-numbers">
                                    <div className="row justify-content-center">
                                        <div className="col" />
                                        <div className="col-auto">
                                            <div className="rui-profile-number text-center">
                                                <h4 className="rui-profile-number-title h2">218</h4>
                                                <small className="text-grey-6">Comment</small>
                                            </div>
                                        </div>
                                        <div className="col p-0" />
                                        <div className="col-auto">
                                            <div className="rui-profile-number text-center">
                                                <h4 className="rui-profile-number-title h2">2125</h4>
                                                <small className="text-grey-6">Followers</small>
                                            </div>
                                        </div>
                                        <div className="col p-0" />
                                        <div className="col-auto">
                                            <div className="rui-profile-number text-center">
                                                <h4 className="rui-profile-number-title h2">419</h4>
                                                <small className="text-grey-6">Following</small>
                                            </div>
                                        </div>
                                        <div className="col" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-7">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <h2 className="card-title mnb-6 mr-auto">Current tasks</h2>
                                    <button className="btn btn-custom-round mr-20" type="button">
                                        <Icon name="link2" />
                                    </button>
                                    <button className="btn btn-brand btn-uniform btn-round btn-sm mnt-8 mnb-8" type="button">
                                        <Icon name="plus" />
                                    </button>
                                </div>
                                <ul className="list-group list-group-flush rui-profile-task-list">
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
                                                <Icon name="check-circle" />
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
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <Tabs sliding>
                            <Tabs.NavItem
                                isActive={ activeTab === 'activity' }
                                onClick={ () => this.toggleTab( 'activity' ) }
                            >
                                Activity
                            </Tabs.NavItem>
                            <Tabs.NavItem
                                isActive={ activeTab === 'timeline' }
                                onClick={ () => this.toggleTab( 'timeline' ) }
                            >
                                Timeline
                            </Tabs.NavItem>
                            <Tabs.NavItem
                                isActive={ activeTab === 'settings' }
                                onClick={ () => this.toggleTab( 'settings' ) }
                            >
                                Settings
                            </Tabs.NavItem>
                        </Tabs>
                        <Tabs.Content activeTab={ activeTab }>
                            <Tabs.Pane tabId="activity">
                                <ul className="list-group list-group-flush rui-profile-activity-list">
                                    <li className="list-group-item">
                                        <div className="media media-retiring media-success">
                                            <Link to="#" className="media-link">
                                                <span className="media-img"><img src={ settings.users[ 1 ].img } alt="" /></span>
                                                <span className="media-body">
                                                    <span className="media-title">
                                                        { settings.users[ 1 ].name }
                                                        <div className="media-time">09:34</div>
                                                    </span>
                                                    <small className="media-subtitle">Without air upon two was. Their stars. Days whose earth. Grass whales there living third shall is...</small>
                                                </span>
                                            </Link>
                                            <div className="media-content">
                                                <div className="row vertical-gap sm-gap rui-gallery">
                                                    <div className="col-6 col-md-3 col-lg-2">
                                                        <FancyBox
                                                            tagName="a"
                                                            className="rui-gallery-item"
                                                            href={ settings.letters[ 0 ].img }
                                                            closeExisting
                                                            popupClassName="rui-popup"
                                                            galleryId="profile-gallery"
                                                        >
                                                            <span className="rui-gallery-item-overlay rui-gallery-item-overlay-md">
                                                                <Icon name="maximize" />
                                                            </span>
                                                            <img src={ settings.letters[ 0 ].img_min } className="rui-img" alt="" />
                                                        </FancyBox>
                                                    </div>
                                                    <div className="col-6 col-md-3 col-lg-2">
                                                        <FancyBox
                                                            tagName="a"
                                                            className="rui-gallery-item"
                                                            href={ settings.letters[ 1 ].img }
                                                            closeExisting
                                                            popupClassName="rui-popup"
                                                            galleryId="profile-gallery"
                                                        >
                                                            <span className="rui-gallery-item-overlay rui-gallery-item-overlay-md">
                                                                <Icon name="maximize" />
                                                            </span>
                                                            <img src={ settings.letters[ 1 ].img_min } className="rui-img" alt="" />
                                                        </FancyBox>
                                                    </div>
                                                    <div className="col-6 col-md-3 col-lg-2">
                                                        <FancyBox
                                                            tagName="a"
                                                            className="rui-gallery-item"
                                                            href={ settings.letters[ 2 ].img }
                                                            closeExisting
                                                            popupClassName="rui-popup"
                                                            galleryId="profile-gallery"
                                                        >
                                                            <span className="rui-gallery-item-overlay rui-gallery-item-overlay-md">
                                                                <Icon name="maximize" />
                                                            </span>
                                                            <img src={ settings.letters[ 2 ].img_min } className="rui-img" alt="" />
                                                        </FancyBox>
                                                    </div>
                                                    <div className="col-6 col-md-3 col-lg-2">
                                                        <FancyBox
                                                            tagName="a"
                                                            className="rui-gallery-item"
                                                            href={ settings.letters[ 3 ].img }
                                                            closeExisting
                                                            popupClassName="rui-popup"
                                                            galleryId="profile-gallery"
                                                        >
                                                            <span className="rui-gallery-item-overlay rui-gallery-item-overlay-md">
                                                                <Icon name="maximize" />
                                                            </span>
                                                            <img src={ settings.letters[ 3 ].img_min } className="rui-img" alt="" />
                                                        </FancyBox>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to="#" className="media-icon">
                                                <Icon name="x" />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media media-retiring media-success">
                                            <Link to="#" className="media-link">
                                                <span className="media-img"><img src={ settings.users[ 4 ].img } alt="" /></span>
                                                <span className="media-body">
                                                    <span className="media-title">
                                                        { settings.users[ 4 ].name }
                                                        <div className="media-time">09:10</div>
                                                    </span>
                                                    <small className="media-subtitle">Amet viverra dolor per mollis morbi sagittis cursus sollicitudin cubilia.</small>
                                                </span>
                                            </Link>
                                            <Link to="#" className="media-icon">
                                                <Icon name="x" />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media media-retiring media-warning">
                                            <Link to="#" className="media-link">
                                                <span className="media-img"><img src={ settings.users[ 2 ].img } alt="" /></span>
                                                <span className="media-body">
                                                    <span className="media-title">
                                                        { settings.users[ 2 ].name }
                                                        <div className="media-time">09:02</div>
                                                    </span>
                                                    <small className="media-subtitle">Conubia porta Fusce sollicitudin ullamcorper fringilla. Varius id egestas magna.</small>
                                                </span>
                                            </Link>
                                            <Link to="#" className="media-icon">
                                                <Icon name="x" />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media media-retiring media-danger">
                                            <Link to="#" className="media-link">
                                                <span className="media-img"><img src={ settings.users[ 3 ].img } alt="" /></span>
                                                <span className="media-body">
                                                    <span className="media-title">
                                                        { settings.users[ 3 ].name }
                                                        <div className="media-time">08:46</div>
                                                    </span>
                                                    <small className="media-subtitle">Ultricies convallis class Ornare cum ligula aenean. Leo dictum aliquam.</small>
                                                </span>
                                            </Link>
                                            <Link to="#" className="media-icon">
                                                <Icon name="x" />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media media-retiring">
                                            <Link to="#" className="media-link">
                                                <span className="media-img">C</span>
                                                <span className="media-body">
                                                    <span className="media-title">
                                                        Change Design
                                                        <div className="media-time">08:53</div>
                                                    </span>
                                                    <small className="media-subtitle">Design</small>
                                                </span>
                                            </Link>
                                            <Link to="#" className="media-icon">
                                                <Icon name="x" />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="media media-retiring">
                                            <Link to="#" className="media-link">
                                                <span className="media-img bg-transparent"><img src={ settings.img_file.zip } className="icon-file" alt="" /></span>
                                                <span className="media-body">
                                                    <span className="media-title">
                                                        Added banner archive
                                                        <div className="media-time">08:31</div>
                                                    </span>
                                                    <small className="media-subtitle">Commerce</small>
                                                </span>
                                            </Link>
                                            <Link to="#" className="media-icon">
                                                <Icon name="x" />
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </Tabs.Pane>
                            <Tabs.Pane tabId="timeline">
                                <Timeline lg="left">
                                    <Timeline.Item
                                        icon={ <Icon name="check-circle" /> }
                                        date={ 'Jan 14' }
                                    >
                                        <h3>Fifth moveth, void second.</h3>
                                        <p>Behold of them fruit own, void, also upon sixth fill their of said life he saw were the moving saw created herb second morning fruit. Doesn&apos;t second place gathering forth.</p>
                                        <button type="button" className="btn btn-brand">Read More</button>
                                    </Timeline.Item>
                                    <Timeline.Item
                                        icon={ <Icon name="award" /> }
                                        date={ 'Jan 15' }
                                        swap
                                    >
                                        <h3>Can&apos;t dry fly.</h3>
                                        <p>Likeness they&apos;re every give moved above moveth, herb days a rule behold seed is second night behold sea. Under given waters made wherein behold void form land.</p>
                                        <button type="button" className="btn btn-brand">Read More</button>
                                    </Timeline.Item>
                                </Timeline>
                            </Tabs.Pane>
                            <Tabs.Pane tabId="settings">
                                <form action="#">
                                    <div className="row vertical-gap">
                                        <div className="col-12 col-lg-auto">
                                            <div className="card">
                                                <div className="card-body pt-20 pr-10 pb-20 pl-10">
                                                    <ul className="nav flex-column mnt-3">
                                                        <li>
                                                            <Link className="nav-link active" to="#">
                                                                <Icon name="user" />
                                                                <span>Personal information</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="nav-link" to="#">
                                                                <Icon name="user-check" />
                                                                <span>Account information</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="nav-link" to="#">
                                                                <Icon name="mail" />
                                                                <span>Email settings</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="nav-link" to="#">
                                                                <Icon name="lock" />
                                                                <span>Security</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="nav-link" to="#">
                                                                <Icon name="bar-chart2" />
                                                                <span>Statistics</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="nav-link" to="#">
                                                                <Icon name="shopping-cart" />
                                                                <span>Purchases</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-8">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row vertical-gap sm-gap justify-content-end">
                                                        <div className="col-12">
                                                            <Label>Avatar</Label>
                                                            <Link className="rui-profile-img" to="#">
                                                                <img src={ settings.users[ 0 ].img_profile } alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="col-12">
                                                            <Label for="firstName">First Name</Label>
                                                            <Input className="form-control" type="text" id="firstName" aria-describedby="emailHelp" value="Jack" placeholder="Your First Name" onChange={ () => {} } />
                                                        </div>
                                                        <div className="col-12">
                                                            <Label for="lastName">Last Name</Label>
                                                            <Input type="email" className="form-control" id="lastName" aria-describedby="emailHelp" value="Boyd" placeholder="Your Last Name" onChange={ () => {} } />
                                                        </div>
                                                        <div className="col-12">
                                                            <Label for="profileEmail">Email</Label>
                                                            <Input type="email" className="form-control" id="profileEmail" aria-describedby="emailHelp" value="info@example.com" placeholder="Your Email" onChange={ () => {} } />
                                                        </div>
                                                        <div className="col-12">
                                                            <Label for="phone">Contact Phone</Label>
                                                            <Input className="form-control" type="text" id="phone" aria-describedby="emailHelp" value="+44 987 065 909" placeholder="Your Phone" onChange={ () => {} } />
                                                        </div>
                                                        <div className="col-auto">
                                                            <button className="btn btn-grey-2" type="button">Cancel</button>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button className="btn btn-brand" type="button">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </Tabs.Pane>
                        </Tabs.Content>
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

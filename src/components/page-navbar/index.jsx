/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/prop-types */
/**
 * External Dependencies
 */
import React, { Component } from "react";
import classnames from "classnames/dedupe";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Collapse } from "reactstrap";

/**
 * Internal Dependencies
 */
import {
    updateAuth as actionUpdateAuth,
    updateSettings as actionUpdateSettings,
} from '../../actions';
import Dropdown from '../bs-dropdown';
import Icon from '../icon';
import FancyBox from '../fancybox';
import PagePopupSearch from '../page-popup-search';
import Messenger from '../messenger';
import { initNavbar } from '../../../common-assets/js/rootui-parts/initNavbar';

const $ = window.jQuery;

window.RootUI.initNavbar = initNavbar;

/**
 * Component
 */
class PageNavbar extends Component {
  constructor(props) {
    super(props);

    window.RootUI.initNavbar();

    this.state = {
      mobileMenuShow: false,
    };

    this.logOut = this.logOut.bind(this);
    this.renderSubmenus = this.renderSubmenus.bind(this);
    this.renderRightMenuItems = this.renderRightMenuItems.bind(this);
  }

  componentDidMount() {
    $(document).on("keydown.rui-navbar", (e) => {
      const { mobileMenuShow } = this.state;

      if (mobileMenuShow && e.keyCode === 27) {
        this.setState({
          mobileMenuShow: !mobileMenuShow,
        });
      }
    });
  }

  componentWillUnmount() {
    $(document).off("keydown.rui-navbar");
  }

  logOut() {
    const { updateAuth } = this.props;

    updateAuth({
      token: "",
    });
  }

  renderSubmenus(nav, isMobile, level = 1) {
    return Object.keys(nav).map((url) => {
      const data = nav[url];

      const isActive = window.location.hash === `#${url}`;

      const LinkContent = data.name ? (
        <>
          {data.icon ? (
            <>
              <Icon name={data.icon} />
              <span>{data.name}</span>
              <span
                className={data.sub ? "rui-dropdown-circle" : "rui-nav-circle"}
              />
            </>
          ) : (
            data.name
          )}
        </>
      ) : (
        ""
      );

      return (
        <React.Fragment key={`${url}-${data.name}`}>
          {data.sub ? (
            <Dropdown
              tag="li"
              className={classnames(isActive ? "active" : "")}
              direction={level === 1 ? "up" : "right"}
              openOnHover={!isMobile}
              showTriangle
            >
              <Dropdown.Toggle tag="a" href="#" className="dropdown-item">
                {LinkContent}
              </Dropdown.Toggle>
              <Dropdown.Menu tag="ul" className="nav dropdown-menu">
                {this.renderSubmenus(data.sub, isMobile, level + 1)}
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <li className={classnames("nav-item", isActive ? "active" : "")}>
              <Link to={data.sub ? "#" : url} className="nav-link">
                {LinkContent}
              </Link>
            </li>
          )}
        </React.Fragment>
      );
    });
  }

  renderRightMenuItems(isMobile) {
    const { settings, updateSettings } = this.props;

    const countriesDropdown = [
      {
        name: "USA",
        img: settings.img_country.usa,
      },
      {
        name: "China",
        img: settings.img_country.china,
      },
      {
        name: "Germany",
        img: settings.img_country.germany,
      },
      {
        name: "Japan",
        img: settings.img_country.japan,
      },
      {
        name: "Spain",
        img: settings.img_country.spain,
      },
    ];

    return (
      <>
        {/* <li className="nav-item">
          <FancyBox
            tagName="a"
            className={classnames("d-flex", isMobile ? "nav-link" : "")}
            touch={false}
            closeExisting
            autoFocus
            parentEl={null}
            popupClassName="rui-popup rui-popup-search container"
            popupRender={() => <PagePopupSearch settings={settings} />}
          >
            {isMobile ? (
              <>
                <Icon name="search" />
                <span>Search</span>
              </>
            ) : (
              <span className="btn btn-custom-round">
                <Icon name="search" />
              </span>
            )}
          </FancyBox>
        </li> */}
        <Dropdown tag="li" direction="up" openOnHover={!isMobile} showTriangle>
          <Dropdown.Toggle
            tag="a"
            href="#"
            className={classnames("dropdown-item", isMobile ? "nav-link" : "")}
          >
            {/* {isMobile ? (
              <>
                <Icon name="flag" />
                <span>Language</span>
              </>
            ) : (
              <span className="btn btn-custom-round">
                <Icon name="flag" />
              </span>
            )} */}
          </Dropdown.Toggle>
          <Dropdown.Menu
            tag="ul"
            className="nav dropdown-menu rui-navbar-dropdown-language"
            modifiers={{ offset: { offset: "0,12" } }}
          >
            {countriesDropdown.map((data) => (
              <li key={data.name}>
                <Link to="#" className="rui-navbar-language">
                  <span className="rui-navbar-language-img">
                    <img src={data.img} alt={data.name} />
                  </span>
                  {data.name}
                </Link>
              </li>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown tag="li" direction="up" openOnHover={!isMobile} showTriangle>
          <Dropdown.Toggle
            tag="a"
            href="#"
            className={classnames("dropdown-item", isMobile ? "nav-link" : "")}
          >
            {/* {isMobile ? (
              <>
                <Icon name="bell" />
                <span>Notifications</span>
                <span className="badge badge-circle badge-brand">3</span>
              </>
            ) : (
              <span className="btn btn-custom-round">
                <Icon name="bell" className="mr-0" />
                <span className="badge badge-circle badge-brand">3</span>
              </span>
            )} */}
          </Dropdown.Toggle>
          <Dropdown.Menu
            tag="ul"
            className="nav dropdown-menu rui-navbar-dropdown-notice"
            modifiers={{ offset: { offset: "0,12" } }}
          >
            <li className="rui-navbar-dropdown-title mb-10">
              <div className="d-flex align-items-center">
                <h2 className="h4 mb-0 mr-auto">Notifications</h2>
                <Link to="/profile" className="btn btn-custom-round">
                  <Icon name="link2" />
                </Link>
              </div>
            </li>
            <li>
              <div className="media media-success media-filled mnl-30 mnr-30">
                <Link to="/profile" className="media-link">
                  <span className="media-img">
                    <img src={settings.users[4].img} alt="" />
                  </span>
                  <span className="media-body">
                    <span className="media-title">
                      {settings.users[4].name}
                    </span>
                    <small className="media-subtitle">
                      Bring abundantly creature great...
                    </small>
                  </span>
                </Link>
                <Link to="#" className="media-icon">
                  <Icon name="x" />
                </Link>
              </div>
            </li>
            <li>
              <div className="media media-filled mnl-30 mnr-30">
                <Link to="/profile" className="media-link">
                  <span className="media-img">C</span>
                  <span className="media-body">
                    <span className="media-title">Change Design</span>
                    <small className="media-subtitle">Design</small>
                  </span>
                </Link>
                <Link to="#" className="media-icon">
                  <Icon name="x" />
                </Link>
              </div>
            </li>
            <li>
              <div className="media media-filled mnl-30 mnr-30">
                <Link to="/profile" className="media-link">
                  <span className="media-img bg-transparent">
                    <img
                      src={settings.img_file.zip}
                      className="icon-file"
                      alt=""
                    />
                  </span>
                  <span className="media-body">
                    <span className="media-title">Added banner archive</span>
                    <small className="media-subtitle">Commerce</small>
                  </span>
                </Link>
                <Link to="#" className="media-icon">
                  <Icon name="x" />
                </Link>
              </div>
            </li>
          </Dropdown.Menu>
        </Dropdown>
        {/* <li className="nav-item">
          <FancyBox
            tagName="a"
            className={classnames("d-flex", isMobile ? "nav-link" : "")}
            keyboard={false}
            touch={false}
            closeExisting
            autoFocus
            popupClassName="rui-popup rui-popup-messenger"
            popupRender={() => <Messenger settings={settings} />}
          >
            {isMobile ? (
              <>
                <Icon name="message-circle" />
                <span>Messenger</span>
              </>
            ) : (
              <span className="btn btn-custom-round">
                <Icon name="message-circle" />
              </span>
            )}
          </FancyBox>
        </li> */}
        {!isMobile ? (
          <Dropdown tag="li" direction="up" openOnHover showTriangle>
            <Dropdown.Toggle
              tag="a"
              href="#"
              className="dropdown-item rui-navbar-avatar mnr-6"
            >
              {/* <img src={"../../../common-assets/images/avatar-1.png"} alt="" /> */}
            </Dropdown.Toggle>
            <Dropdown.Menu tag="ul" className="nav dropdown-menu">
              <li>
                <Link to="/profile" className="nav-link">
                  <Icon name="plus-circle" />
                  <span>Create new Post</span>
                  <span className="rui-nav-circle" />
                </Link>
              </li>
              <li>
                <Link to="/profile" className="nav-link">
                  <Icon name="users" />
                  <span>Manage Users</span>
                  <span className="rui-nav-circle" />
                </Link>
              </li>
              <li>
                <Link to="/profile" className="nav-link">
                  <Icon name="check-circle" />
                  <span>Check Updates</span>
                  <span className="rui-nav-circle" />
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link" onClick={this.logOut}>
                  <Icon name="log-out" />
                  <span>Log Out</span>
                  <span className="rui-nav-circle" />
                </Link>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          ""
        )}
        <Dropdown tag="li" direction="up" openOnHover={!isMobile} showTriangle>
          <Dropdown.Toggle
            tag="a"
            href="#"
            className={classnames(
              "dropdown-item mnr-5",
              isMobile ? "nav-link" : ""
            )}
            nav-link
          >
            {isMobile ? (
              <>
                <Icon name="more-vertical" />
                <span>More</span>
                <span className="rui-dropdown-circle" />
              </>
            ) : (
              <span className="btn btn-custom-round">
                <Icon name="more-vertical" />
              </span>
            )}
          </Dropdown.Toggle>
          <Dropdown.Menu
            tag="ul"
            className="nav dropdown-menu"
            modifiers={{ offset: { offset: "0,12" } }}
          >
            <li>
              <div className="custom-control custom-switch dropdown-item-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="toggleNightMode"
                  checked={settings.night_mode}
                  onChange={() => {
                    updateSettings({
                      night_mode: !settings.night_mode,
                    });
                  }}
                />
                {/* eslint-disable-next-line */}
                <label
                  className="dropdown-item custom-control-label"
                  htmlFor="toggleNightMode"
                >
                  <Icon name="moon" />
                  <span>Night Mode</span>
                  <span className="rui-dropdown-circle" />
                </label>
              </div>
            </li>
            <li>
              <div className="custom-control custom-switch dropdown-item-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="toggleSpotlightMode"
                  checked={settings.spotlight_mode}
                  onChange={() => {
                    updateSettings({
                      spotlight_mode: !settings.spotlight_mode,
                    });
                  }}
                />
                {/* eslint-disable-next-line */}
                <label
                  className="dropdown-item custom-control-label"
                  htmlFor="toggleSpotlightMode"
                >
                  <Icon name="square" />
                  <span>Spotlight Mode</span>
                  <span className="rui-dropdown-circle" />
                </label>
              </div>
            </li>
            <li>
              <div className="custom-control custom-switch dropdown-item-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="toggleSectionLines"
                  checked={settings.show_section_lines}
                  onChange={() => {
                    updateSettings({
                      show_section_lines: !settings.show_section_lines,
                    });
                  }}
                />
                {/* eslint-disable-next-line */}
                <label
                  className="dropdown-item custom-control-label"
                  htmlFor="toggleSectionLines"
                >
                  <Icon name="layout" />
                  <span>Show section lines</span>
                  <span className="rui-dropdown-circle" />
                </label>
              </div>
            </li>
            <li className="dropdown-menu-label">Sidebar</li>
            <li>
              <div className="custom-control custom-switch dropdown-item-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="toggleDarkSidebar"
                  checked={settings.sidebar_dark}
                  onChange={() => {
                    updateSettings({
                      sidebar_dark: !settings.sidebar_dark,
                    });
                  }}
                />
                {/* eslint-disable-next-line */}
                <label
                  className="dropdown-item custom-control-label"
                  htmlFor="toggleDarkSidebar"
                >
                  <Icon name="sidebar" />
                  <span>Dark</span>
                  <span className="rui-dropdown-circle" />
                </label>
              </div>
            </li>
            <li>
              <div className="custom-control custom-switch dropdown-item-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="toggleStaticSidebar"
                  checked={settings.sidebar_static}
                  onChange={() => {
                    updateSettings({
                      sidebar_static: !settings.sidebar_static,
                    });
                  }}
                />
                {/* eslint-disable-next-line */}
                <label
                  className="dropdown-item custom-control-label"
                  htmlFor="toggleStaticSidebar"
                >
                  <Icon name="sidebar" />
                  <span>Static</span>
                  <span className="rui-dropdown-circle" />
                </label>
              </div>
            </li>
            <li className="dropdown-menu-label">Navbar</li>
            <li>
              <div className="custom-control custom-switch dropdown-item-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="toggleDarkNavbar"
                  checked={settings.nav_dark}
                  onChange={() => {
                    updateSettings({
                      nav_dark: !settings.nav_dark,
                    });
                  }}
                />
                {/* eslint-disable-next-line */}
                <label
                  className="dropdown-item custom-control-label"
                  htmlFor="toggleDarkNavbar"
                >
                  <Icon name="menu" />
                  <span>Dark</span>
                  <span className="rui-dropdown-circle" />
                </label>
              </div>
            </li>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }

  render() {
    const { settings } = this.props;

    const { mobileMenuShow } = this.state;

    return (
      <>
        {/* Nav Menu */}
        <nav
          className={classnames(
            "rui-navbar rui-navbar-top",
            settings.nav_dark ? "rui-navbar-dark" : "",
            settings.nav_sticky ? "rui-navbar-sticky" : "",
            settings.nav_fixed ? "rui-navbar-fixed" : "",
            settings.nav_expand
              ? `rui-navbar-expand-${settings.nav_expand}`
              : ""
          )}
        >
          <div className="rui-navbar-brand">
            {settings.nav_logo_path ? (
              <Link to={settings.nav_logo_url} className="rui-navbar-logo">
                <img
                  src={
                    "../../../common-assets/images/logo_light.png"                  }
                  alt=""
                  width={settings.nav_logo_width}
                />
              </Link>
            ) : (
              ""
            )}

            <button className="yay-toggle rui-yaybar-toggle" type="button">
              <span />
            </button>
          </div>
          <div
            className={`container${
              settings.nav_container_fluid ? "-fluid" : ""
            }`}
          >
            <div className="rui-navbar-content">
              <ul className="nav">
                {this.renderSubmenus(settings.navigation)}
              </ul>
              <ul className="nav rui-navbar-right">
                {this.renderRightMenuItems()}
              </ul>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <nav
          className={classnames(
            "rui-navbar rui-navbar-mobile",
            settings.nav_dark ? "rui-navbar-dark" : "",
            settings.nav_expand
              ? `rui-navbar-expand-${settings.nav_expand}`
              : "",
            mobileMenuShow ? "rui-navbar-show" : ""
          )}
        >
          <div className="rui-navbar-head">
            {!mobileMenuShow ? (
              <button
                className="rui-yaybar-toggle rui-yaybar-toggle-inverse yay-toggle"
                type="button"
                aria-label="Toggle side navigation"
              >
                <span />
              </button>
            ) : (
              ""
            )}
            {settings.nav_logo_path ? (
              <Link
                to={settings.nav_logo_url}
                className="rui-navbar-logo mr-auto"
              >
                <img
                  src={
                    settings.night_mode || settings.nav_dark
                      ? settings.nav_logo_white_path
                      : settings.nav_logo_path
                  }
                  alt=""
                  width={settings.nav_logo_width}
                />
              </Link>
            ) : (
              ""
            )}
            <Dropdown tag="div" direction="up" showTriangle>
              <Dropdown.Toggle
                tag="a"
                href="#"
                className="dropdown-item rui-navbar-avatar"
              >
                <img src={settings.users[0].img} alt="" />
              </Dropdown.Toggle>
              <Dropdown.Menu tag="ul" className="nav dropdown-menu">
                <li>
                  <Link to="/profile" className="nav-link">
                    <Icon name="plus-circle" />
                    <span>Create new Post</span>
                    <span className="rui-nav-circle" />
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="nav-link">
                    <Icon name="users" />
                    <span>Manage Users</span>
                    <span className="rui-nav-circle" />
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="nav-link">
                    <Icon name="check-circle" />
                    <span>Check Updates</span>
                    <span className="rui-nav-circle" />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link" onClick={this.logOut}>
                    <Icon name="log-out" />
                    <span>Log Out</span>
                    <span className="rui-nav-circle" />
                  </Link>
                </li>
              </Dropdown.Menu>
            </Dropdown>
            <button
              className="navbar-toggler rui-navbar-toggle ml-5"
              onClick={() => {
                this.setState({
                  mobileMenuShow: !mobileMenuShow,
                });
              }}
            >
              <span />
            </button>
          </div>
          <Collapse
            isOpen={mobileMenuShow}
            className="navbar-collapse rui-navbar-collapse"
          >
            <div className="rui-navbar-content">
              <ul className="nav">
                {this.renderSubmenus(settings.navigation, true)}
                {this.renderRightMenuItems(true)}
              </ul>
            </div>
          </Collapse>
        </nav>
        <div
          className="rui-navbar-bg"
          onClick={() => {
            this.setState({
              mobileMenuShow: !mobileMenuShow,
            });
          }}
          onKeyUp={() => {}}
          role="button"
          tabIndex={0}
        />
      </>
    );
  }
}

export default connect(
  ({ settings }) => ({
    settings,
  }),
  {
    updateAuth: actionUpdateAuth,
    updateSettings: actionUpdateSettings,
  }
)(PageNavbar);

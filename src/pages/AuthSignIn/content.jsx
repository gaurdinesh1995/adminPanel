/* eslint-disable */
/**
 * External Dependencies
 */
import React, { Component, Fragment } from "react";
import classnames from "classnames/dedupe";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import { postLogin } from "../../services/Auth";

/**
 * Internal Dependencies
 */
// import Icon from "../../components/icon";
import { isValidEmail } from "../../utils";

import { updateAuth as actionUpdateAuth } from "../../actions";

/**
 * Component
 */
class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      loading: false,
    };

    this.checkEmail = this.checkEmail.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.maybeLogin = this.maybeLogin.bind(this);
  }

  checkEmail() {
    const { email } = this.state;

    const isValid = email && isValidEmail(email);

    this.setState({
      emailError: isValid ? "" : "Invalid email format",
    });

    return isValid;
  }

  checkPassword() {
    const { password } = this.state;

    const isValid = password && password.length >= 6;

    this.setState({
      passwordError: isValid
        ? ""
        : "Password must be at least 6 characters long",
    });

    return isValid;
  }

  maybeLogin() {
    const { updateAuth } = this.props;

    if (this.state.loading) {
      return;
    }

    let isValid = true;
    isValid = this.checkEmail() && isValid;
    isValid = this.checkPassword() && isValid;

    // Form is not valid.
    if (!isValid) {
      return;
    }

    this.setState({
      loading: true,
    });
    const { email, password } = this.state;
    postLogin(email, password).then(
      (response) => {
        debugger;
        this.setState({
          loading: false,
        });
        const { data } = response;
        if (data.statusCode === 200) {
          updateAuth({
            token: data.data.token,
          });
        }
      },
      (error) => {
        this.setState({
          loading: true,
        });
      }
    );
  }

  render() {
    const { email, emailError, password, passwordError } = this.state;

    return (
      <Fragment>
        <div className="bg-image">
          <div className="bg-grey-1" />
        </div>
        <div className="form rui-sign-form rui-sign-form-cloud">
          <div className="row vertical-gap sm-gap justify-content-center">
            <div className="col-12">
              <h1 className="display-4 mb-10 text-center">Sign In</h1>
            </div>
            <div className="col-12">
              <input
                type="email"
                className={classnames("form-control", {
                  "is-invalid": emailError,
                })}
                aria-describedby="emailHelp"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  this.setState(
                    {
                      email: e.target.value,
                    },
                    emailError ? this.checkEmail : () => {}
                  );
                }}
                onBlur={this.checkEmail}
                disabled={this.state.loading}
              />
              {emailError ? (
                <div className="invalid-feedback">{emailError}</div>
              ) : (
                ""
              )}
            </div>
            <div className="col-12">
              <input
                type="password"
                className={classnames("form-control", {
                  "is-invalid": passwordError,
                })}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  this.setState(
                    {
                      password: e.target.value,
                    },
                    passwordError ? this.checkPassword : () => {}
                  );
                }}
                onBlur={this.checkPassword}
                disabled={this.state.loading}
              />
              {passwordError ? (
                <div className="invalid-feedback">{passwordError}</div>
              ) : (
                ""
              )}
            </div>
            {/* <div className="col-sm-6">
              <div className="custom-control custom-checkbox d-flex justify-content-start">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="rememberMe"
                  disabled={this.state.loading}
                />
                <label
                  className="custom-control-label fs-13"
                  htmlFor="rememberMe"
                >
                  Remember me
                </label>
              </div>
            </div> */}
            {/* <div className="col-sm-6">
              <div className="d-flex justify-content-end">
                <Link to="#" className="fs-13">
                  Forget password?
                </Link>
              </div>
            </div> */}
            <div className="col-12">
              <button
                className="btn btn-brand btn-block text-center"
                onClick={this.maybeLogin}
                disabled={this.state.loading}
              >
                Sign In
                {this.state.loading ? <Spinner /> : ""}
              </button>
               
            </div>
            {/* <div className="col-12">
                            <div className="rui-sign-or mt-2 mb-5">or</div>
                        </div> */}
            {/* <div className="col-12">
                            <ul className="rui-social-links">
                                <li>
                                    <button
                                        className="rui-social-github"
                                        onClick={ this.maybeLogin }
                                        disabled={ this.state.loading }
                                    >
                                        <Icon vendor="fa" name={ [ 'fab', 'github' ] } />
                                        Github
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="rui-social-facebook"
                                        onClick={ this.maybeLogin }
                                        disabled={ this.state.loading }
                                    >
                                        <Icon vendor="fa" name={ [ 'fab', 'facebook-f' ] } />
                                        Facebook
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="rui-social-google"
                                        onClick={ this.maybeLogin }
                                        disabled={ this.state.loading }
                                    >
                                        <Icon vendor="fa" name={ [ 'fab', 'google' ] } />
                                        Google
                                    </button>
                                </li>
                            </ul>
                        </div> */}
          </div>
        </div>
        {/* <div className="mt-20 text-grey-5">
          Don&apos;t you have an account?{" "}
          <Link to="/sign-up" className="text-2">
            Sign Up
          </Link>
        </div> */}
      </Fragment>
    );
  }
}

export default connect(
  ({ auth, settings }) => ({
    auth,
    settings,
  }),
  { updateAuth: actionUpdateAuth }
)(Content);

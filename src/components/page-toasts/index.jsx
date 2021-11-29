/**
 * Styles
 */
import './style.scss';

/**
 * External Dependencies
 */
import classnames from 'classnames/dedupe';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Toast, ToastBody } from 'reactstrap';
import TimeAgo from 'react-timeago';

/**
 * Internal Dependencies
 */
import {
    addToast as actionAddToast,
    removeToast as actionRemoveToast,
} from '../../actions';

import Icon from '../icon';

/**
 * Component
 */
class PageToasts extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            hiddenToasts: {},
        };
        this.timerToasts = {};

        this.maybePrepareToastsTimeout = this.maybePrepareToastsTimeout.bind( this );
        this.hideToast = this.hideToast.bind( this );
    }

    componentDidMount() {
        const {
            auth,
            addToast,
        } = this.props;

        // Startup toast when already logged in
        if ( auth.token ) {
            // setTimeout( () => {
            //     addToast( {
            //         title: 'Welcome to RootUI React',
            //         content: (
            //             <>
            //                 Welcome to
            //                 { ' ' }
            //                 <strong>RootUI React</strong>
            //                 { ' ' }
            //                 admin dashboard. Hope that things are going good for you :)
            //             </>
            //         ),
            //         // current date's milliseconds - 1,000 ms * 60 s * 60 mins * 24 hrs * (# of days beyond one to go back)
            //         time: new Date( new Date() - ( 1000 * 60 * 60 * 24 * 15 ) ),
            //         duration: 8000,
            //     } );
            // }, 2000 );
        }
    }

    componentDidUpdate( prevProps ) {
        const {
            auth,
            addToast,
        } = this.props;

        if ( auth.token !== prevProps.auth.token ) {
            // logged in toast.
            if ( auth.token ) {
                addToast( {
                    title: 'Successfully Logged In',
                    content: (
                        <>
                            Welcome to
                            { ' ' }
                            <strong>NCARE FMCG Terminal</strong>
                            { ' ' }
                            admin dashboard. Hope that things are going good for you :)
                        </>
                    ),
                    time: new Date(),
                    duration: 4000,
                } );

                // logged out toast.
            } else {
                addToast( {
                    title: 'Successfully Logged Out',
                    content: 'Hope to See you again.',
                    time: new Date(),
                    duration: 4000,
                    color: 'danger',
                } );
            }
        }

        this.maybePrepareToastsTimeout();
    }

    maybePrepareToastsTimeout() {
        const {
            toasts,
        } = this.props;

        const {
            timerToasts,
            hideToast,
        } = this;

        Object.keys( toasts ).forEach( ( uid ) => {
            const toast = toasts[ uid ];

            if ( toast.duration && ! timerToasts[ uid ] ) {
                timerToasts[ uid ] = true;
                setTimeout( () => {
                    hideToast( uid );
                }, toast.duration );
            }
        } );
    }

    hideToast( uid ) {
        const {
            removeToast,
        } = this.props;

        // hide toast.
        this.setState( {
            hiddenToasts: {
                ...this.state.hiddenToasts,
                [ uid ]: true,
            },
        }, () => {
            // completely remove toast from store.
            setTimeout( () => {
                removeToast( uid );
            }, 600 );
        } );
    }

    render() {
        const {
            toasts,
        } = this.props;

        const {
            hiddenToasts,
        } = this.state;

        return (
            <div className="rui-toast-container">
                { Object.keys( toasts ).reverse().map( ( uid ) => {
                    const toast = toasts[ uid ];

                    return (
                        <Toast
                            key={ uid }
                            className={ classnames( 'rui-toast', `toast-${ toast.color }` ) }
                            isOpen={ ! hiddenToasts[ uid ] }
                        >
                            <div className="toast-header">
                                { toast.title ? (
                                    <h5 className="mr-auto mnb-2">{ toast.title }</h5>
                                ) : '' }
                                { toast.time ? (
                                    <small className="toast-date">
                                        <TimeAgo date={ toast.time } />
                                    </small>
                                ) : '' }
                                { toast.closeButton ? (
                                    <button
                                        type="button"
                                        className="ml-15 mnt-4 mnr-4 toast-close close"
                                        aria-label="Close"
                                        onClick={ () => {
                                            this.hideToast( uid );
                                        } }
                                    >
                                        <Icon name="x" />
                                    </button>
                                ) : '' }
                            </div>
                            { toast.content ? (
                                <ToastBody>
                                    { toast.content }
                                </ToastBody>
                            ) : '' }
                        </Toast>
                    );
                } ) }
            </div>
        );
    }
}

export default connect( ( { auth, toasts } ) => (
    {
        auth,
        toasts,
    }
), {
    addToast: actionAddToast,
    removeToast: actionRemoveToast,
} )( PageToasts );

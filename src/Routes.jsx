/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import RoutesList from './pages';
import NotFoundPage from './pages/404';

/**
 * Component
 */
class Routes extends Component {
    render() {
        const {
            location,
        } = this.props;

        return (
            <Switch
                location={ location }
            >
                { Object.keys( RoutesList ).map( ( path ) => {
                    const RouteInner = RoutesList[ path ];

                    return (
                        <Route
                            key={ path }
                            path={ path }
                            exact
                            render={ () => (
                                <RouteInner />
                            ) }
                        />
                    );
                } ) }

                { /* 404 */ }
                <Route
                    render={ () => (
                        <NotFoundPage />
                    ) }
                />
            </Switch>
        );
    }
}

export default Routes;

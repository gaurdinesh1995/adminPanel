/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';

/**
 * Component
 */
class Content extends Component {
    render() {
        return (
            <Fragment>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import DataTable from \'react-data-table-component\';',
                        ].join( '\n' )
                    }
                >
                    <DataTable
                        pagination
                        paginationPerPage={ 10 }
                        columns={ [
                            {
                                name: '#',
                                selector: 'id',
                                sortable: true,
                            }, {
                                name: 'First',
                                selector: 'first',
                                sortable: true,
                            }, {
                                name: 'Last',
                                selector: 'last',
                                sortable: true,
                            }, {
                                name: 'Handle',
                                selector: 'handle',
                                sortable: true,
                                right: true,
                            },
                        ] }
                        data={ [
                            {
                                id: 1,
                                first: 'Mark',
                                last: 'Otto',
                                handle: '@mdo',
                            }, {
                                id: 2,
                                first: 'Jacob',
                                last: 'Thornton',
                                handle: '@fat',
                            }, {
                                id: 3,
                                first: 'Larry',
                                last: 'the Bird',
                                handle: '@twitter',
                            }, {
                                id: 4,
                                first: 'Mark',
                                last: 'Otto',
                                handle: '@mdo',
                            }, {
                                id: 5,
                                first: 'Jacob',
                                last: 'Thornton',
                                handle: '@fat',
                            }, {
                                id: 6,
                                first: 'Larry',
                                last: 'the Bird',
                                handle: '@twitter',
                            }, {
                                id: 7,
                                first: 'Mark',
                                last: 'Otto',
                                handle: '@mdo',
                            }, {
                                id: 8,
                                first: 'Jacob',
                                last: 'Thornton',
                                handle: '@fat',
                            }, {
                                id: 9,
                                first: 'Larry',
                                last: 'the Bird',
                                handle: '@twitter',
                            }, {
                                id: 10,
                                first: 'Mark',
                                last: 'Otto',
                                handle: '@mdo',
                            }, {
                                id: 11,
                                first: 'Jacob',
                                last: 'Thornton',
                                handle: '@fat',
                            }, {
                                id: 12,
                                first: 'Larry',
                                last: 'the Bird',
                                handle: '@twitter',
                            },
                        ] }
                    />
                </Snippet>
            </Fragment>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
) )( Content );

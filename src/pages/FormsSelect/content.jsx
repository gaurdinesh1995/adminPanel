/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';

/**
 * Component
 */
class Content extends Component {
    render() {
        const colorOptions = [
            { value: 'blue', label: 'Blue' },
            { value: 'ocean', label: 'Ocean' },
            { value: 'red', label: 'Red' },
            { value: 'yellow', label: 'Yellow' },
            { value: 'purple', label: 'Purple' },
            { value: 'orange', label: 'Orange' },
            { value: 'green', label: 'Green' },
        ];

        const customStyles = {
            control: ( css, state ) => {
                return {
                    ...css,
                    borderColor: state.isFocused ? 'rgba(114, 94, 195, 0.6)' : '#eaecf0',
                    '&:hover': {
                        borderColor: state.isFocused ? 'rgba(114, 94, 195, 0.6)' : '#eaecf0',
                    },
                    boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(114, 94, 195, 0.2)' : '',
                };
            },
            option: ( css, state ) => {
                let bgc = '';

                if ( state.isSelected ) {
                    bgc = '#725ec3';
                } else if ( state.isFocused ) {
                    bgc = 'rgba(114, 94, 195, 0.2)';
                }

                return {
                    ...css,
                    backgroundColor: bgc,
                };
            },
            multiValueLabel: ( css ) => {
                return {
                    ...css,
                    color: '#545b61',
                    backgroundColor: '#eeeeef',
                };
            },
        };

        return (
            <Fragment>
                <h2 id="selectBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import Select from \'react-select\';',
                        ].join( '\n' )
                    }
                >
                    <Select
                        defaultValue={ colorOptions[ 1 ] }
                        options={ colorOptions }
                        styles={ customStyles }
                    />
                </Snippet>

                <div className="rui-gap-4" id="selectMulti"></div>
                <h2>Multi</h2>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import Select from \'react-select\';',
                        ].join( '\n' )
                    }
                >
                    <Select
                        defaultValue={ [ colorOptions[ 1 ], colorOptions[ 3 ] ] }
                        options={ colorOptions }
                        styles={ customStyles }
                        isMulti
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

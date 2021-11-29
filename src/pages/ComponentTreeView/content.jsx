/**
 * Styles
 */
import './style.scss';

/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Tree from 'rc-tree';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import Icon from '../../components/icon';

/**
 * Component
 */
class Content extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            defaultExpandedKeys: [ '0-0-0-0' ],
            defaultSelectedKeys: [ '0-0-0-0' ],
            defaultCheckedKeys: [ '0-0-0-0' ],
        };
    }

    onExpand( expandedKeys ) {
        // eslint-disable-next-line no-console
        console.log( 'onExpand', expandedKeys );
    }

    onSelect( selectedKeys, info ) {
        // eslint-disable-next-line no-console
        console.log( 'selected', selectedKeys, info );
    }

    onCheck( checkedKeys, info ) {
        // eslint-disable-next-line no-console
        console.log( 'onCheck', checkedKeys, info );
    }

    getFileIcon( data ) {
        if ( data.data && data.data.children ) {
            return <Icon name={ data.expanded ? 'folder-minus' : 'folder-plus' } />;
        }

        return <Icon name="file" />;
    }

    render() {
        const treeData = [
            {
                key: '0-0',
                title: 'Root node',
                className: 'rui-rc-tree-root',
                children: [
                    { key: '0-0-0', title: 'Child node 1', className: 'rui-rc-tree-first' },
                    { key: '0-0-1', title: 'Child node 2' },
                    {
                        key: '0-0-2',
                        title: 'Root node',
                        children: [
                            { key: '0-0-2-0', title: 'Child node 1', className: 'rui-rc-tree-first' },
                            { key: '0-0-2-1', title: 'Child node 1' },
                        ],
                    },
                ],
            }, {
                key: '0-1',
                title: 'Root node 2',
                className: 'rui-rc-tree-root',
                children: [
                    { key: '0-1-0', title: 'Child node 1', className: 'rui-rc-tree-first' },
                    { key: '0-1-1', title: 'Child node 2' },
                ],
            },
        ];

        return (
            <Fragment>
                <Snippet
                    language="html"
                    preview
                    codeBefore={
                        [
                            'import Tree from \'rc-tree\';',
                        ].join( '\n' )
                    }
                >
                    <Tree
                        className="rui-rc-tree"
                        showLine
                        checkable={ false }
                        selectable={ false }
                        defaultExpandAll
                        onExpand={ this.onExpand }
                        defaultSelectedKeys={ this.state.defaultSelectedKeys }
                        defaultCheckedKeys={ this.state.defaultCheckedKeys }
                        onSelect={ this.onSelect }
                        onCheck={ this.onCheck }
                        treeData={ treeData }
                        icon={ ( data ) => {
                            return this.getFileIcon( data );
                        } }
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

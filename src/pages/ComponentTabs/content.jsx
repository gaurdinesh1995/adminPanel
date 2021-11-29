/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import Snippet from '../../components/snippet';
import Tabs from '../../components/tabs';

/**
 * Component
 */
class Content extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            activeTab1: 'home',
            activeTab2: 'home',
            activeTab3: 'home',
            activeTab4: 'home',
        };

        this.toggleTab = this.toggleTab.bind( this );
    }

    toggleTab( num, name ) {
        this.setState( {
            [ `activeTab${ num }` ]: name,
        } );
    }

    render() {
        return (
            <Fragment>
                <h2 id="tabsBase">Base</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Tabs from \'../../components/tabs\';',
                        ].join( '\n' )
                    }
                >
                    <Tabs>
                        <Tabs.NavItem
                            isActive={ this.state.activeTab1 === 'home' }
                            onClick={ () => this.toggleTab( 1, 'home' ) }
                        >
                            Home
                        </Tabs.NavItem>
                        <Tabs.NavItem
                            isActive={ this.state.activeTab1 === 'profile' }
                            onClick={ () => this.toggleTab( 1, 'profile' ) }
                        >
                            Profile
                        </Tabs.NavItem>
                        <Tabs.NavItem
                            isActive={ this.state.activeTab1 === 'contact' }
                            onClick={ () => this.toggleTab( 1, 'contact' ) }
                        >
                            Contact
                        </Tabs.NavItem>
                    </Tabs>
                    <Tabs.Content activeTab={ this.state.activeTab1 }>
                        <Tabs.Pane tabId="home">
                            Behold life divided man subdue, after. Form winged creeping. Was divide of without evening give, was. Open had fruitful. Were lesser greater heaven also fly first for together is appear days. Gathered bearing midst green every fly behold fish you&apos;re.
                        </Tabs.Pane>
                        <Tabs.Pane tabId="profile">
                            Kind third day saw set itself fowl after whales upon can&apos;t sixth of days let fill Replenish waters make. Dry gathering winged land they&apos;re you&apos;ll above green was she&apos;d moving.
                        </Tabs.Pane>
                        <Tabs.Pane tabId="contact">
                            Isn&apos;t that Moveth night set seed moved. Also fowl seed signs subdue day male seasons don&apos;t saying, subdue fish all. Fill from place. Two fifth Years light blessed it he. Seed brought Life dry creepeth appear first in above it.
                        </Tabs.Pane>
                    </Tabs.Content>
                </Snippet>

                <div className="rui-gap-4" id="tabsPills"></div>
                <h2>Pills</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Tabs from \'../../components/tabs\';',
                        ].join( '\n' )
                    }
                >
                    <Tabs pills>
                        <Tabs.NavItem
                            isActive={ this.state.activeTab2 === 'home' }
                            onClick={ () => this.toggleTab( 2, 'home' ) }
                        >
                            Home
                        </Tabs.NavItem>
                        <Tabs.NavItem
                            isActive={ this.state.activeTab2 === 'profile' }
                            onClick={ () => this.toggleTab( 2, 'profile' ) }
                        >
                            Profile
                        </Tabs.NavItem>
                        <Tabs.NavItem
                            isActive={ this.state.activeTab2 === 'contact' }
                            onClick={ () => this.toggleTab( 2, 'contact' ) }
                        >
                            Contact
                        </Tabs.NavItem>
                    </Tabs>
                    <Tabs.Content activeTab={ this.state.activeTab2 }>
                        <Tabs.Pane tabId="home">
                            Behold life divided man subdue, after. Form winged creeping. Was divide of without evening give, was. Open had fruitful. Were lesser greater heaven also fly first for together is appear days. Gathered bearing midst green every fly behold fish you&apos;re.
                        </Tabs.Pane>
                        <Tabs.Pane tabId="profile">
                            Kind third day saw set itself fowl after whales upon can&apos;t sixth of days let fill Replenish waters make. Dry gathering winged land they&apos;re you&apos;ll above green was she&apos;d moving.
                        </Tabs.Pane>
                        <Tabs.Pane tabId="contact">
                            Isn&apos;t that Moveth night set seed moved. Also fowl seed signs subdue day male seasons don&apos;t saying, subdue fish all. Fill from place. Two fifth Years light blessed it he. Seed brought Life dry creepeth appear first in above it.
                        </Tabs.Pane>
                    </Tabs.Content>
                </Snippet>

                <div className="rui-gap-4" id="tabsSliding"></div>
                <h2>Sliding</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Tabs from \'../../components/tabs\';',
                        ].join( '\n' )
                    }
                >
                    <Tabs sliding>
                        <Tabs.NavItem
                            isActive={ this.state.activeTab3 === 'home' }
                            onClick={ () => this.toggleTab( 3, 'home' ) }
                        >
                            Home
                        </Tabs.NavItem>
                        <Tabs.NavItem
                            isActive={ this.state.activeTab3 === 'profile' }
                            onClick={ () => this.toggleTab( 3, 'profile' ) }
                        >
                            Profile
                        </Tabs.NavItem>
                        <Tabs.NavItem
                            isActive={ this.state.activeTab3 === 'contact' }
                            onClick={ () => this.toggleTab( 3, 'contact' ) }
                        >
                            Contact
                        </Tabs.NavItem>
                    </Tabs>
                    <Tabs.Content activeTab={ this.state.activeTab3 }>
                        <Tabs.Pane tabId="home">
                            Behold life divided man subdue, after. Form winged creeping. Was divide of without evening give, was. Open had fruitful. Were lesser greater heaven also fly first for together is appear days. Gathered bearing midst green every fly behold fish you&apos;re.
                        </Tabs.Pane>
                        <Tabs.Pane tabId="profile">
                            Kind third day saw set itself fowl after whales upon can&apos;t sixth of days let fill Replenish waters make. Dry gathering winged land they&apos;re you&apos;ll above green was she&apos;d moving.
                        </Tabs.Pane>
                        <Tabs.Pane tabId="contact">
                            Isn&apos;t that Moveth night set seed moved. Also fowl seed signs subdue day male seasons don&apos;t saying, subdue fish all. Fill from place. Two fifth Years light blessed it he. Seed brought Life dry creepeth appear first in above it.
                        </Tabs.Pane>
                    </Tabs.Content>
                </Snippet>

                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Tabs from \'../../components/tabs\';',
                        ].join( '\n' )
                    }
                >
                    <Tabs pills sliding>
                        <Tabs.NavItem
                            isActive={ this.state.activeTab4 === 'home' }
                            onClick={ () => this.toggleTab( 4, 'home' ) }
                        >
                            Home
                        </Tabs.NavItem>
                        <Tabs.NavItem
                            isActive={ this.state.activeTab4 === 'profile' }
                            onClick={ () => this.toggleTab( 4, 'profile' ) }
                        >
                            Profile
                        </Tabs.NavItem>
                        <Tabs.NavItem
                            isActive={ this.state.activeTab4 === 'contact' }
                            onClick={ () => this.toggleTab( 4, 'contact' ) }
                        >
                            Contact
                        </Tabs.NavItem>
                    </Tabs>
                    <Tabs.Content activeTab={ this.state.activeTab4 }>
                        <Tabs.Pane tabId="home">
                            Behold life divided man subdue, after. Form winged creeping. Was divide of without evening give, was. Open had fruitful. Were lesser greater heaven also fly first for together is appear days. Gathered bearing midst green every fly behold fish you&apos;re.
                        </Tabs.Pane>
                        <Tabs.Pane tabId="profile">
                            Kind third day saw set itself fowl after whales upon can&apos;t sixth of days let fill Replenish waters make. Dry gathering winged land they&apos;re you&apos;ll above green was she&apos;d moving.
                        </Tabs.Pane>
                        <Tabs.Pane tabId="contact">
                            Isn&apos;t that Moveth night set seed moved. Also fowl seed signs subdue day male seasons don&apos;t saying, subdue fish all. Fill from place. Two fifth Years light blessed it he. Seed brought Life dry creepeth appear first in above it.
                        </Tabs.Pane>
                    </Tabs.Content>
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

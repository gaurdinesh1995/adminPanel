/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import Widget from '../../../components/widget';
import { VectorMap } from '../../../components/vector-map';

class Map extends Component {
    render() {
        const { settings } = this.props;

        const data = {
            'US-VA': 6278, // Virginia
            'US-PA': 2110, // Pennsylvania
            'US-TN': 2917, // Tennessee
            'US-WV': 1721, // West Virginia
            'US-NV': 900, // Nevada
            'US-TX': 13263, // Texas
            'US-NH': 2917, // New Hampshire
            'US-NY': 19220, // New York
            'US-HI': 2726, // Hawaii
            'US-VT': 1927, // Vermont
            'US-NM': 8650, // New Mexico
            'US-NC': 1720, // North Carolina
            'US-ND': 6780, // North Dakota
            'US-NE': 2980, // Nebraska
            'US-LA': 9271, // Louisiana
            'US-SD': 2712, // South Dakota
            'US-DC': 8360, // District of Columbia
            'US-DE': 2900, // Delaware
            'US-FL': 9162, // Florida
            'US-CT': 6281, // Connecticut
            'US-WA': 8261, // Washington
            'US-KS': 1611, // Kansas
            'US-WI': 2751, // Wisconsin
            'US-OR': 2860, // Oregon
            'US-KY': 9960, // Kentucky
            'US-ME': 2710, // Maine
            'US-OH': 8361, // Ohio
            'US-OK': 3816, // Oklahoma
            'US-ID': 13251, // Idaho
            'US-WY': 2871, // Wyoming
            'US-UT': 3812, // Utah
            'US-IN': 10721, // Indiana
            'US-IL': 3816, // Illinois
            'US-AK': 3810, // Alaska
            'US-NJ': 8920, // New Jersey
            'US-CO': 7350, // Colorado
            'US-MD': 1923, // Maryland
            'US-MA': 4816, // Massachusetts
            'US-AL': 2710, // Alabama
            'US-MO': 3150, // Missouri
            'US-MN': 1863, // Minnesota
            'US-CA': 9372, // California
            'US-IA': 3726, // Iowa
            'US-MI': 790, // Michigan
            'US-GA': 2860, // Georgia
            'US-AZ': 8610, // Arizona
            'US-MT': 8785, // Montana
            'US-MS': 3710, // Mississippi
            'US-SC': 7739, // South Carolina
            'US-RI': 1753, // Rhode Island
            'US-AR': 7720, // Arkansas
        };

        return (
            <Widget className="p-0">
                <VectorMap
                    containerClassName="rui-jqvmap"
                    map="us_aea"
                    backgroundColor={ settings.night_mode ? '#323842' : '#f8f9fa' }
                    showTooltip
                    series={ {
                        regions: [ {
                            scale: [
                                '#d3d6da',
                                '#8a8f9c',
                            ],
                            values: data,
                        } ],
                    } }
                    onRegionTipShow={ ( event, label, code ) => {
                        if ( data[ code ] === undefined ) {
                            label.html( `${ label.html() } - $0` );
                        } else {
                            label.html( `${ label.html() } - $${ data[ code ] }` );
                        }
                    } }
                />
            </Widget>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
) )( Map );

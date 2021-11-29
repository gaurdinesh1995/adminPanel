/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Echarts from 'echarts-for-react';

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
                <h2 id="chartLine">Line</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Echarts from \'echarts-for-react\';',
                        ].join( '\n' )
                    }
                >
                    <Echarts
                        option={ {
                            tooltip: {
                                trigger: 'axis',
                                backgroundColor: '#393f49',
                                padding: [
                                    5, 10, 5, 10,
                                ],
                                axisPointer: {
                                    type: 'none',
                                },
                                textStyle: {
                                    fontSize: 12,
                                },
                            },
                            xAxis: {
                                type: 'category',
                                data: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep' ],
                                splitLine: {
                                    show: false,
                                },
                                axisTick: {
                                    show: false,
                                },
                                axisLine: {
                                    show: false,
                                },
                                boundaryGap: false,
                                nameTextStyle: {
                                    fontFamily: "'Open Sans', sans-serif",
                                },
                            },
                            yAxis: {
                                type: 'value',
                                splitLine: {
                                    show: false,
                                },
                                axisTick: {
                                    show: false,
                                },
                                axisLine: {
                                    show: false,
                                },
                                boundaryGap: false,
                                nameTextStyle: {
                                    fontFamily: "'Open Sans', sans-serif",
                                },
                            },
                            textStyle: {
                                color: '#bcbec0',
                                fontFamily: "'Open Sans', sans-serif",
                            },
                            grid: {
                                top: 20,
                                right: 30,
                                bottom: 20,
                                left: 30,
                            },
                            series: [
                                {
                                    data: [ 0, 10, 10, 13, 10, 20, 10, 10, 25 ],
                                    type: 'line',
                                    name: 'Chart 1',
                                    smooth: true,
                                    areaStyle: {
                                        normal: {
                                            color: 'rgba(171, 184, 255, 0.8)',
                                            opacity: 1,
                                        },
                                    },
                                    lineStyle: {
                                        normal: {
                                            width: 0,
                                        },
                                    },
                                    symbol: 'circle',
                                    symbolSize: 1,
                                    symbolOffset: [ 0, 1 ],
                                    itemStyle: {
                                        normal: {
                                            borderWidth: 0,
                                            color: 'rgba(171, 184, 255, 1)',
                                        },
                                    },
                                },
                                {
                                    data: [ 0, 9, 15, 10, 30, 15, 25, 18, 20 ],
                                    type: 'line',
                                    name: 'Chart 2',
                                    smooth: true,
                                    areaStyle: {
                                        normal: {
                                            color: 'rgba(94, 119, 255, 0.8)',
                                            opacity: 1,
                                        },
                                    },
                                    lineStyle: {
                                        normal: {
                                            width: 0,
                                        },
                                    },
                                    symbol: 'circle',
                                    symbolSize: 1,
                                    symbolOffset: [ 0, 1 ],
                                    itemStyle: {
                                        normal: {
                                            borderWidth: 0,
                                            color: 'rgba(94, 119, 255, 1)',
                                        },
                                    },
                                },
                            ],
                        } }
                    />
                </Snippet>

                <div className="rui-gap-4" id="chartBar"></div>
                <h2>Bar</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Echarts from \'echarts-for-react\';',
                        ].join( '\n' )
                    }
                >
                    <Echarts
                        option={ {
                            tooltip: {
                                trigger: 'item',
                                backgroundColor: '#393f49',
                                padding: [
                                    5, 10, 5, 10,
                                ],
                                axisPointer: {
                                    type: 'none',
                                },
                                textStyle: {
                                    fontSize: 12,
                                },
                            },
                            xAxis: {
                                type: 'category',
                                data: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep' ],
                                splitLine: {
                                    show: false,
                                },
                                axisTick: {
                                    show: false,
                                },
                                axisLine: {
                                    show: false,
                                },
                                nameTextStyle: {
                                    fontFamily: "'Open Sans', sans-serif",
                                },
                            },
                            yAxis: {
                                type: 'value',
                                splitLine: {
                                    show: false,
                                },
                                axisTick: {
                                    show: false,
                                },
                                axisLine: {
                                    show: false,
                                },
                                nameTextStyle: {
                                    fontFamily: "'Open Sans', sans-serif",
                                },
                            },
                            textStyle: {
                                color: '#bcbec0',
                                fontFamily: "'Open Sans', sans-serif",
                            },
                            grid: {
                                top: 20,
                                right: 60,
                                bottom: 20,
                                left: 30,
                            },
                            series: [
                                {
                                    data: [ 0, 9, 15, 10, 30, 15, 25, 18, 20 ],
                                    type: 'bar',
                                    name: 'Chart 1',
                                    barGap: '10%',
                                    barCategoryGap: '20%',
                                    itemStyle: {
                                        normal: {
                                            borderWidth: 0,
                                            color: 'rgba(94, 119, 255, 0.8)',
                                        },
                                    },
                                }, {
                                    data: [ 0, 10, 10, 13, 10, 20, 10, 10, 25 ],
                                    type: 'bar',
                                    name: 'Chart 2',
                                    barGap: '10%',
                                    barCategoryGap: '20%',
                                    itemStyle: {
                                        normal: {
                                            borderWidth: 0,
                                            color: 'rgba(171, 184, 255, 0.8)',
                                        },
                                    },
                                },
                            ],
                        } }
                    />
                </Snippet>

                <div className="rui-gap-4" id="chartPie"></div>
                <h2>Pie</h2>
                <Snippet
                    language="html"
                    preview
                    previewFrame
                    codeBefore={
                        [
                            'import Echarts from \'echarts-for-react\';',
                        ].join( '\n' )
                    }
                >
                    <Echarts
                        option={ {
                            tooltip: {
                                trigger: 'item',
                                backgroundColor: '#393f49',
                                padding: [
                                    5, 10, 5, 10,
                                ],
                                axisPointer: {
                                    type: 'none',
                                },
                                textStyle: {
                                    fontSize: 12,
                                },
                            },
                            xAxis: {
                                type: 'category',
                                splitLine: {
                                    show: false,
                                },
                                axisTick: {
                                    show: false,
                                },
                                axisLine: {
                                    show: false,
                                },
                            },
                            yAxis: {
                                type: 'value',
                                splitLine: {
                                    show: false,
                                },
                                axisTick: {
                                    show: false,
                                },
                                axisLine: {
                                    show: false,
                                },
                                nameTextStyle: {
                                    fontFamily: "'Open Sans', sans-serif",
                                },
                            },
                            textStyle: {
                                color: '#bcbec0',
                                fontFamily: "'Open Sans', sans-serif",
                            },
                            grid: {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                            },
                            series: {
                                type: 'pie',
                                hoverAnimation: false,
                                data: [
                                    {
                                        value: 5,
                                        name: 'Jan',
                                        itemStyle: {
                                            normal: {
                                                borderWidth: 0,
                                                color: 'rgba(94, 119, 255, 0.8)',
                                            },
                                        },
                                    },
                                    {
                                        value: 3,
                                        name: 'Feb',
                                        itemStyle: {
                                            normal: {
                                                borderWidth: 0,
                                                color: 'rgba(94, 119, 255, 0.6)',
                                            },
                                        },
                                    },
                                    {
                                        value: 4,
                                        name: 'Mar',
                                        itemStyle: {
                                            normal: {
                                                borderWidth: 0,
                                                color: 'rgba(94, 119, 255, 0.4)',
                                            },
                                        },
                                    },
                                ],
                                label: {
                                    normal: {
                                        show: false,
                                    },
                                },
                            },
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

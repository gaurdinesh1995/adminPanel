/**
 * Styles
 */
import './style.scss';

/**
 * External Dependencies
 */
import React, { Component } from 'react';
import classnames from 'classnames/dedupe';

/**
 * Internal Dependencies
 */

/**
 * Component
 */
class Timeline extends Component {
    render() {
        const {
            children,
            left,
            right,
            md,
            lg,
            xl,
        } = this.props;

        const className = classnames(
            'rui-timeline',
            {
                'rui-timeline-left': left && ! right,
                'rui-timeline-right': right,
                'rui-timeline-right-md': md === 'right',
                'rui-timeline-left-md': md === 'left',
                'rui-timeline-right-lg': lg === 'right',
                'rui-timeline-left-lg': lg === 'left',
                'rui-timeline-right-xl': xl === 'right',
                'rui-timeline-left-xl': xl === 'left',
            },
            this.props.className
        );

        return (
            <div className={ className }>
                <div className="rui-timeline-line" />
                { children }
            </div>
        );
    }
}

Timeline.Item = class TimelineItem extends Component {
    render() {
        const {
            children,
            icon,
            date,
            swap,
        } = this.props;

        const className = classnames(
            'rui-timeline-item',
            {
                'rui-timeline-item-swap': swap,
            },
            this.props.className
        );

        return (
            <div className={ className }>
                { icon ? (
                    <div className="rui-timeline-icon">
                        { icon }
                    </div>
                ) : '' }
                <div className="rui-timeline-content">
                    { children }
                </div>
                { date ? (
                    <div className="rui-timeline-date">
                        { date }
                    </div>
                ) : '' }
            </div>
        );
    }
};

export default Timeline;

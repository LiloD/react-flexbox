import Radium from 'radium';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Block extends Component {
    render() {
        const {
            el, type, flex, direction, wrap,
            justify, align, alignSelf, style,
            ...otherProps,
        } = this.props;

        let styles = [];

        if (typeof flex === 'boolean') {
            styles.push({ display: 'flex' });

            if (direction) {
                styles.push({ flexDirection: direction });
            }

            if (wrap) {
                styles.push({ flexWrap: wrap });
            }

            if (justify) {
                styles.push({ justifyContent: justify });
            }

            if (align) {
                styles.push({ alignItems: align });
            }
        }

        if (typeof flex === 'string') {
            styles.push({ flex: flex });
        }

        if (alignSelf) {
            styles.push({ alignSelf: alignSelf });
        }

        return React.createElement(
            el || 'div',
            {
                ...otherProps,
                style: styles.concat(style),
            },
        );
    }
}

Block.propTypes = {
    el: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),

    flex: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),

    direction: PropTypes.string,

    wrap: PropTypes.string,

    justify: PropTypes.string,

    align: PropTypes.string,

    alignSelf: PropTypes.string,
};

export default Radium(Block);
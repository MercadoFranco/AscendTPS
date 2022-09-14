import React, { Component } from 'react';
import Radium from 'radium';

class RadiumButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
                style={[styles.base]}
            >
                {this.props.children}
            </button>
        );
    }
}

var styles = {
    button: {
        backgroundColor: 'white',
        padding: '2rem',
        border: '0',
        borderRadius: '2rem',
        overflow: 'hidden',
        transition: 'all',
        animationDuration: '2000ms',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'grey',
        }
    }
}

export default Radium(RadiumButton);
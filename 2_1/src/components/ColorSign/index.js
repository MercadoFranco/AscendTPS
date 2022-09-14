import React from 'react';

class ColorSign extends React.Component {
    constructor() {
        super();
        this.state = { color: "red"};
        setTimeout(this.changeColor, 5000);
    }

    changeColor = () => {
        this.setState({ color: "green" })
    }

    render() {
        return (
            <div style={{ color: this.state.color }}>
                {this.state.color}
            </div>
        )
    }
}

export default ColorSign;
import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { title: 'Titulo' }
    }

    render() {
        return ( 
            <div>
                { this.state.title }
            </div>
        )
    }
}

export default Header;
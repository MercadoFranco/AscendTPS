import React, { Component } from 'react';
import './index.css';

class ExperimentComponent extends Component {
    constructor(props) {
        console.log('Executing constructor');
        super(props);
        this.state = {
            constructor: true,
            render: false,
            componentDidMount: false,
            componentDidUpdate: false,
            componentWillUnmount: false,
        }
    }

    handleChange = (cycle) => {
        if(!this.state[cycle]) {
            console.log('Executing ', cycle);
            this.setState({[cycle]:true})
        }
    };

    componentDidMount() {
        this.handleChange('componentDidMount');
    }
    
    componentDidUpdate() {
        this.handleChange('componentDidUpdate');
    }

    componentWillUnmount() {
        this.handleChange('componentWillUnmount')
    }
    render() {
        this.handleChange('render')
        return (
            <div className='ExperimentContainer'>
                <div className={`ExperimentItem ${this.state.constructor ? 'ExperimentItemActive' : ''}`}>
                    Constructor
                    <p>{`${this.state.constructor}`}</p>
                </div>

                <div className={`ExperimentItem ${this.state.render ? 'ExperimentItemActive' : ''}`}>
                    Render
                    <p>{`${this.state.render}`}</p>
                </div>

                <div className={`ExperimentItem ${this.state.componentDidMount ? 'ExperimentItemActive' : ''}`}>
                    ComponentDidMount
                    <p>{`${this.state.componentDidMount}`}</p>
                </div>

                <div className={`ExperimentItem ${this.state.componentDidUpdate ? 'ExperimentItemActive' : ''}`}>
                    ComponentDidUpdate
                    <p>{`${this.state.componentDidUpdate}`}</p>
                </div>

                <div className={`ExperimentItem ${this.state.componentWillUnmount ? 'ExperimentItemActive' : ''}`}>
                    ComponentWillUnmount
                    <p>{`${this.state.componentWillUnmount}`}</p>
                </div>
            </div>
        );
    }
}

export default ExperimentComponent;
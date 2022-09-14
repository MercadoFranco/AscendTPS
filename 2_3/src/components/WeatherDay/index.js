import { Component } from "react";
import WeatherIcons from '../WeatherIcons';
import './index.css';

class WeatherDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: props.day,
            weather: props.weather,
        }
    }
    render() {
        return (
            <button
                onClick={this.props.clickHandler}
                className="WeatherButton"
            >
                <p className="WeatherDayNumber">
                    {this.state.day}
                </p>
                {this.state.weather && (
                    <img
                        src={WeatherIcons[this.state.weather?.toLowerCase()]}
                        alt={this.state.weather}
                        className="WeatherDayIcon"
                    />
                )}
            </button>
        );
    }
}

export default WeatherDay;
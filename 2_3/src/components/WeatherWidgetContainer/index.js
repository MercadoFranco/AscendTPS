import { Component } from "react";
import WeatherInfo from '../WeatherInfo';
import './index.css';

class WeatherWidgetContainer extends Component {
    render() {
        return (
            <div className="WeatherWidget">
                <WeatherInfo
                    weatherList={[
                        { day: 1, weather: "Sunny" },
                        { day: 2, weather: "Rainy" },
                        { day: 3, weather: "Cloudy" },
                        { day: 4, weather: "Sunny" },
                    ]}
                />
            </div>
        );
    }
}

export default WeatherWidgetContainer;
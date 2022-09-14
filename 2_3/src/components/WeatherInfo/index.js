import React, { Component } from 'react';
import WeatherIcons from '../WeatherIcons';
import WeatherDay from '../WeatherDay';
import './index.css';

class WeatherInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { weatherList: props.weatherList }
    }
    setCurrentDay = (weather) => this.setState({selectedDay:weather});
    render() {
        return (
            <div className='WeatherInfoContainer'>
                {
                    this.state.selectedDay ? (
                        <div>
                            <p>Dia {this.state.selectedDay.day}</p>
                            {   this.state.selectedDay.weather && (
                                <img 
                                    src={WeatherIcons[this.state.selectedDay.weather?.toLowerCase()]}
                                    alt={this.state.selectedDay.weather}
                                    className="WeatherIcon"
                                />
                            )}
                            <p>{this.state.selectedDay.weather}</p>
                        </div>
                    ) : (
                        <div>
                            <p>—</p>
                            <div className="WeatherIconPlaceholder"/>
                            <p>—</p>
                        </div>
                    )
                }
                <div className='WeatherListContainer'>
                    {
                        this.state.weatherList.map(weather => (
                            <WeatherDay
                                key={weather.day}
                                day={weather.day}
                                weather={weather.weather}
                                clickHandler={() => this.setCurrentDay(weather)}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default WeatherInfo;
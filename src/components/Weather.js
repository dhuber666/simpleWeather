import React from 'react';
import Header from './Header';
import WeatherSearch from './WeatherSearch';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Switch from 'react-router-dom/Switch';

class Weather extends React.Component {


    render() {
        return (
            <div>
                <Header />
                <WeatherSearch />
            </div>
        )
    }
}

export default Weather;
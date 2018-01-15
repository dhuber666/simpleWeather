import React from 'react';
import { Link } from 'react-router-dom';

function Details(props) {

    // Display a single Day with Backbutton
    console.log(props.location.state); // all weather data I need
    const weather = props.location.state;

    return (
        <div>
            <div className={'weather-card weather-' + weather.id}>
                <div className='card-content'>
                    <h3 className='weekday'>{weather.weekday} </h3>
                    <img className='weatherIcon' src={weather.icon} alt={weather.weekday} />
                    <p className='maxTemp'>{weather.maxTemp}°C </p>
                    <p className='minTemp'>{weather.minTemp}°C </p>
                </div>

            </div>
            <Link to={{
                pathname: '/forecasts',
                search: props.location.search,
            }} className='searchBtn backBtn'> Back </Link>
        </div>
    )
}

export default Details;
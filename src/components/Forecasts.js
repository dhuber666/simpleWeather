import React from 'react';
import queryString from 'query-string';
import { getForecast, getIconLink } from '../API';
import roundTo from 'round-to';
import SingleDay from './SingleDay';
import Header from './Header';
import { Link } from 'react-router-dom';

class Forecasts extends React.Component {

    state = {
        location: queryString.parse(this.props.location.search).location,
        weatherData: null,
        error: null,
        weekday: new Date().getDay()
    }

    componentDidMount() {

        // we need following infos from json:
        // Weekday, Weather Icon, min Temp, max Temp

        // Symbol gets is own function

        const { location } = this.state;

        // API Call, returns 5 Weather Objects (5 days)
        getForecast(location)
            .then((data) => {
                this.setState({
                    weatherData: data,
                    error: null
                })

            })
            .catch((error) => {
                this.setState({
                    error: 'There was an error. Error: ' + error
                })
            })

    }



    render() {

        const { location, weatherData, error, weekday } = this.state;

        if (error) {
            return <h2> {error} </h2>
        }

        if (!weatherData) {
            return <h1 style={{ textAlign: 'center' }}> Loading... </h1>
        }

        console.log(weatherData[0]);

        // map through all 5 days and render a weather Component
        const weatherForecast = weatherData.map((singleDay, id) => {

            const icon = singleDay.weather[0].icon;
            const iconLink = getIconLink(icon);

            const minTemp = roundTo(singleDay.temp.min, 1);
            const maxTemp = roundTo(singleDay.temp.max, 1);

            return (

                <SingleDay
                    icon={iconLink}
                    minTemp={minTemp}
                    maxTemp={maxTemp}
                    weekday={weekday}
                    key={id}
                    id={id} />
            )

        })

        return (
            <div>
                <Header />
                <div className='weather-cards'>
                    {weatherForecast}
                </div>
                <Link to='/' className='searchBtn backBtn'> Back </Link>
            </div>

        )

    }

}

export default Forecasts;
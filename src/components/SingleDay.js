import React from 'react';
import Header from './Header';
import { getWeekday, getIconLink } from '../API';
import { Redirect } from 'react-router-dom';


class SingleDay extends React.Component {

    // make a formual to find out the weekday. 
    state = {
        redirect: false
    }


    handleDayClick = (data) => {

        console.log(data);
        this.setState({
            redirect: true
        })

    }

    componentWillMount() {
        const { redirect } = this.state;
        const weekdayID = this.props.weekday + this.props.id;
        const weekday = getWeekday(weekdayID);

        let weather = {
            weekday: weekday,
            id: this.props.id,
            icon: this.props.icon,
            minTemp: this.props.minTemp,
            maxTemp: this.props.maxTemp
        }

        this.setState({
            weather: weather
        })
    }

    render() {

        const { redirect, weather } = this.state;
        console.log(weather);

        if (!redirect) {
            return (
                <div className={'weather-card weather-' + weather.id} onClick={this.handleDayClick} >
                    <div className='card-content'>
                        <h3 className='weekday'>{weather.weekday} </h3>
                        <img className='weatherIcon' src={weather.icon} alt={weather.weekday} />
                        <p className='maxTemp'>{weather.maxTemp}°C </p>
                        <p className='minTemp'>{weather.minTemp}°C </p>
                    </div>
                </div>
            )
        }
        // why is this not passing in weather as props????
        return <Redirect to={{
            pathname: '/details',
            search: this.props.search,
            state: weather
        }} />
    }
}

export default SingleDay;
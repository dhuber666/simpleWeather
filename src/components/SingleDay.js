import React from 'react';
import Header from './Header';
import { getWeekday, getIconLink } from '../API';


function SingleDay(props) {

    // make a formual to find out the weekday. 

    const weekdayID = props.weekday + props.id;
    const weekday = getWeekday(weekdayID);



    return (
        <div className={'weather-card weather-' + props.id} >
            <div className='card-content'>
                <h3 className='weekday'>{weekday} </h3>
                <img className='weatherIcon' src={props.icon} alt={weekday} />
                <p className='maxTemp'>{props.maxTemp}°C </p>
                <p className='minTemp'>{props.minTemp}°C </p>
            </div>
        </div>
    )
}

export default SingleDay;
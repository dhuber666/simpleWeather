import axios from 'axios';

// create the api calls

const API_KEY = '&appid=b714ec74bbab5650795063cb0fdf5fbe';

const QUERY = 'https://api.openweathermap.org/data/2.5/forecast/daily?q='

export function getForecast(location) {

    let encodedURL = window.encodeURI(QUERY + location + '&cnt=5' + '&units=metric' + API_KEY);
    console.log(encodedURL);
    return axios.get(encodedURL)
        .then((res) => {
            console.log(res);
            return res.data.list;
        })
        .catch((error) => {
            console.log(error.response);
        })
}

export function getIconLink(iconID) {

    const iconLink = `http://openweathermap.org/img/w/${iconID}.png`;

    return iconLink;

}

export function getWeekday(weekdayID) {

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[weekdayID];


}
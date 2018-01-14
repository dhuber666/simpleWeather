import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Redirect from 'react-router-dom/Redirect';

class WeatherSearch extends React.Component {

    state = {
        search: '',
        query: '',
        redirect: false
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            query: this.state.search,
            redirect: true
        })




        // forward the user to /forecasts with query

    }

    render() {

        const { search, redirect, query } = this.state;
        if (!redirect) {
            return (
                <div className='search'>
                    <form onSubmit={this.handleSubmit} >
                        <input className='searchBar' type='text' value={search} onChange={this.handleChange} placeholder='Feldkirchen, Austria' />
                        <div className='line'></div>
                        <input className='searchBtn' type='submit' value='Search' />
                    </form>
                </div>
            )
        } else {
            return <Redirect to={{
                pathname: '/forecasts',
                search: `?location=${query}`,
            }} />
        }
    }
}

export default WeatherSearch;
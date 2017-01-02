import React from 'react';

import Menu from './Menu';
import SkiDayList from './SkiDayList';
import AddDayForm from './AddDayForm';
import SkiDayCount from './SkiDayCount';


export default class App extends React.Component {
    state = {
        allSkiDays: [
            {
                resort: "Squaw Valley",
                date: "1/2/2016",
                powder: true,
                backcountry: false
            }
        ]
    };

    countDays = (filter) => {
        return this.state.allSkiDays.filter(
            day => (filter) ? day[filter] : day
        ).length;
    };

    addDay = (newDay) => {
        this.setState({
            allSkiDays: [...this.state.allSkiDays, newDay]
        });
    };

    render() {
        return(<div className='app'>
            <Menu />
            {
                (this.props.location.pathname === "/") ?
                <SkiDayCount total={this.countDays()}
                    powder={this.countDays('powder')}
                    backcountry={this.countDays('backcountry')}
                />
                :
                (this.props.location.pathname === "/add-day") ?
                <AddDayForm addNewDay={this.addDay}/>
                :
                <SkiDayList days={this.state.allSkiDays}
                    filter={this.props.params.filter}
                />
            }
        </div>);
    }
}
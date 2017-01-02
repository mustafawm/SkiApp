import { PropTypes } from 'react';
import { Link } from 'react-router';

import Terrain from 'react-icons/lib/md/terrain';
import Calendar from 'react-icons/lib/fa/calendar';
import SnowFlake from 'react-icons/lib/ti/weather-snow';

import SkiDayRow from './SkiDayRow';


const SkiDayList = ({days, filter}) => {
    const filtedDays = (!filter || !filter.match(/powder|backcountry/)) ?
        days : days.filter(day => day[filter]);

    return (<div className='ski-day-list'>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Resort</th>
                    <th>Powder</th>
                    <th>Backcountry</th>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <Link to='/list-days'>All days</Link>
                        <Link to='/list-days/powder'>Powder days</Link>
                        <Link to='/list-days/backcountry'>Backcountry days</Link>
                    </td>
                </tr>
            </thead>
            <tbody>
                {filtedDays.map( (day, idx) => <SkiDayRow key={idx} {...day}/> )}
            </tbody>
        </table>
    </div>);
}

SkiDayList.propTypes = {
    days: function(props) {
        if (! Array.isArray(props.days))
            return new Error("SkiDayList must be an array!");
        else if (! props.days.length)
            return new Error("SkiDayList must contain at least one item");
        else return null;
    }
};

export default SkiDayList;
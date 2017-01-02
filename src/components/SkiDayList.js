import { PropTypes } from 'react';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';

import SkiDayRow from './SkiDayRow';

const SkiDayList = ({days}) => (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>Backcountry</th>
            </tr>
        </thead>
        <tbody>
            {days.map( (day, idx) => <SkiDayRow key={idx} {...day}/> )}
        </tbody>
    </table>
);

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
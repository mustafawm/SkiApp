import { PropTypes } from 'react';

import Terrain from 'react-icons/lib/md/terrain';
import Calendar from 'react-icons/lib/fa/calendar';
import SnowFlake from 'react-icons/lib/ti/weather-snow';

import './styles/ui.scss';

const decToPercent = (dec) => {
    return (dec * 100) + '%';
};

const calcGoalProgress = (ttl, goal) => {
    return decToPercent(ttl/goal);
};

const SkiDayCount = ({total=67, powder=25, backcountry=14, goal=100}) => (
    <div className='ski-day-count'>
        <div className='total-days'>
            <span>{total} </span>
            <Calendar />
            <span> day(s)</span>
        </div>
        <div className='powder-days'>
            <span>{powder} </span>
            <SnowFlake />
            <span> day(s)</span>
        </div>
        <div className='backcountry-days'>
            <span>{backcountry} </span>
            <Terrain />
            <span> day(s)</span>
        </div>
        <div>
            <span>
                {calcGoalProgress(total, goal)}
            </span>

        </div>
    </div>
);

SkiDayCount.propTypes = {
    total: PropTypes.number,
    goal: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number
};

export default SkiDayCount;


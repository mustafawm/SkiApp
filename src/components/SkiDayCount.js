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


export default ({total, powder, backcountry, goal}) => (
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
)


import React from 'react';
import ReactDOM from 'react-dom';

import SkiDayCount from './components/SkiDayCount';

window.React = React;

ReactDOM.render(
    <SkiDayCount total={50} powder={20}
                 backcountry={10} goal={100}
    />,
    document.getElementById('app')
);
import React from 'react';
import ReactDOM from 'react-dom';

import {hello, bye} from './components/libs';

ReactDOM.render(
    <div>
        {hello}
        {bye}
    </div>,
    document.getElementById('app')
)
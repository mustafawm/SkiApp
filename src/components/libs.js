import React from 'react';
import titles from './titles.json';

import './styles/hello.css';
import './styles/goodbye.scss';

export const hello = (
    <h1 id='title' className='hello'>
    {titles.hello}
    </h1>
);


export const bye = (
    <h1 id='title' className='goodbye'>
    {titles.goodbye}
    </h1>
)

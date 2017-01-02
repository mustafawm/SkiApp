import { Link } from 'react-router';

import HomeIcon from 'react-icons/lib/fa/home';
import AddIcon from 'react-icons/lib/fa/calendar-plus-o';
import ListIcon from 'react-icons/lib/fa/table';

export default () =>
    <nav className='menu'>
        <Link to='/' activeClassName='selected'>
            <HomeIcon />
        </Link>
        <Link to='/add-day' activeClassName='selected'>
            <AddIcon />
        </Link>
        <Link to='/list-days' activeClassName='selected'>
            <ListIcon />
        </Link>
    </nav>



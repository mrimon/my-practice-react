import React from 'react';

const Link = ({ route }) => {
    return (

        <li className='px-4  md:py-2 hover:bg-amber-300 hover:text-black md:rounded-sm'>
            <a className='' href={route.path}>{route.name}</a>
        </li>

    );
};

export default Link;
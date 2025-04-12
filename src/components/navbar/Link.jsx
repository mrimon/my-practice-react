import React from 'react';

const Link = ({ route }) => {
    return (

        <li className='px-4  md:py-2 hover:text-white hover:bg-black hover:border-amber-300 md:rounded-sm'>
            <a className='' href={route.path}>{route.name}</a>
        </li>

    );
};

export default Link;
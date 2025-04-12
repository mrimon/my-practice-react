import React from 'react';
import Link from './Link';

const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog"
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact"
    }
  ];
  
const Navbar = () => {
    return (
        <nav>

            <ul className='flex'>
                {
                    navItems.map(route => <Link route={route}></Link>)
                }
            </ul>
            {/* <ul className='flex'>
                {
                    navItems.map(route => <li className='ml-10'><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}
            {/* <ul className='flex'>
                <li className='ml-10'><a href="/">Home</a></li>
                <li className='ml-10'><a href="/about">About</a></li>
                <li className='ml-10'><a href="/contact">Contact</a></li>
                <li className='ml-10'><a href="/blog">Blog</a></li>
            </ul> */}
        </nav>
    );
};

export default Navbar;
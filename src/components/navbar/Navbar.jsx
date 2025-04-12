import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

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
const links = navItems.map(route => <Link route={route}></Link>);
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='flex justify-between mx-5 md:mx-10 my-4'>
            <span className='md:hidden' onClick={() => setOpen(!open)}>
                {
                    open? <X className='md:hidden'></X>: <Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden rounded-sm absolute bg-[lightgray] duration-1000 ${open? 'top-10': '-top-32'} text-black`}>
                    {
                        links
                    }
                </ul>
                
                
            </span>
            <h1>My Navbar</h1>
            <ul className='md:flex hidden'>
                {
                    links
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
            <button className='btn bg-amber-300 text-black hover:text-white hover:bg-transparent hover:border-amber-300'>Sign in</button>
        </nav>
    );
};

export default Navbar;
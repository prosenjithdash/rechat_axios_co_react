import { useState } from "react";
import Link from "./Link/Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";


const Navbar = () => {

    // state for hold menu open close
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 1, path: '/service', name: 'Service' },
        { id: 1, path: '/contact', name: 'Contact' }
    ]
    // lg:w-80% lg:max-w-[1300px] lg:mx-auto mt-[50px]
    return (
        <div className="">

            {/* DaisyUI Navbar */}
            {/* <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div> */}
            {/* Create own Responsive Navbar */}

            <div onClick={() => setOpen(!open)} className="md:hidden lg:hidden">
                {
                    open == true ? <IoCloseCircle></IoCloseCircle> : <GiHamburgerMenu></GiHamburgerMenu>
                }


            </div>

            {/* show or hidden
            
            <nav className={`lg:flex md:flex ${open ? '' : 'hidden'} bg-slate-200 w-[150px] lg:w-full md:w-full p-4 m-4 lg:text-center lg:justify-center rounded-xl`}>
                {
                    routes.map(routes => <Link key={routes.id} route={routes}></Link>)
                }
            </nav> */}

            {/* slowly down or up */}
            <div className="flex justify-between">
                {/* <button className="font-extrabold text-xl">PDP Gym</button> */}
                <nav className={`lg:flex md:flex absolute duration-1000 ${open ? 'top-[70px]' : '-top-[250px]'} bg-slate-200  w-[150px] lg:w-full md:w-full p-4 my-4 ml-3 md:ml-auto lg:text-center lg:justify-center rounded-xl md:static lg:static`}>
                    {
                        routes.map(routes => <Link key={routes.id} route={routes}></Link>)
                    }
                </nav>

            </div>

        </div>
    );
};

export default Navbar;


import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-current">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                    to="/" 
                    exact 
                    activeClassName="text-white"
                    className="inline-flex items-center py-6 px-20 mr-4 text-red-100 hover:text-red-400 text-4xl font-bold cursive tracking-widest"
                    >
                        Prince Kumar Kanoujiya
                    </NavLink>
                    <NavLink 
                    to="/post" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-purple-300" 
                    activeClassName="text-red-50 bg-gray-400"
                    >
                        Skills
                    </NavLink>
                    <NavLink 
                    to="/project"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-purple-300" 
                    activeClassName="text-red-50 bg-gray-400"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                    to="/about"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-purple-300" 
                    activeClassName="text-red-50 bg-gray-400"
                    >
                        About me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-16 my-6">
                    <SocialIcon 
                    url="https://www.linkedin.com/in/iprincekumark/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height:35, width:35}}/>
                    <SocialIcon 
                    url="https://github.com/iprincekumark" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height:35, width:35}}

                    />
                </div>
            </div>
        </header>

    )
}
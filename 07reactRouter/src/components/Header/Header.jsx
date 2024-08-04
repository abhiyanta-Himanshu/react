
import {NavLink, Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav
            className="bg-black"
            >
                <div >
                    <Link to="/">
                        <img
                            className=""
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            alt="Logo"
                            width={150}
                            height={60}
                        />
                    </Link>
                    <div>
                        <Link
                            className="mr-4"
                            to="#"
                        >
                            Log in
                        </Link>
                        <Link
                            className="mr-4"
                            to="#"
                        >
                            Get started
                        </Link>
                    </div>

                    <div>
                        <ul
                        className="list-decimal"
                        >
                            <li>
                                <NavLink
                                    to={"/"}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                to={"/about"}
                            >
                                   About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink 
                                to={"/contact"}
                            >
                                   Contact Us
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
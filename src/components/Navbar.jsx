import React, { useState } from "react";
import { Link } from "react-router-dom";
import iiitdlogo from '../images/iiitdlogo.png';
import "./navbar.css";

export default function Navbar() {
    const [dropdownVisible, setDropdownVisible] = useState({ resources: false, technology: false, services: false });

    const handleMouseEnter = (menu) => {
        setDropdownVisible((prev) => ({ ...prev, [menu]: true }));
    };

    const handleMouseLeave = (menu) => {
        setDropdownVisible((prev) => ({ ...prev, [menu]: false }));
    };

    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <img src={iiitdlogo} alt="IIITD Logo" />
                </div>
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    
                    {/* Dropdown for Our Services */}
                    <div
                        className="dropdown"
                        onMouseEnter={() => handleMouseEnter('services')}
                        onMouseLeave={() => handleMouseLeave('services')}
                    >
                        <Link to="/service" className="dropdown-link">
                            Our Services
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="dropdown-icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </Link>
                        {dropdownVisible.services && (
                            <div className="dropdown-menu">
                                <Link to="/FacInn">Facilitate Innovation</Link>
                                <Link to="/Tam">Technology Maturity Assessment</Link>
                                <Link to="/IPR">IPR Management</Link>
                                <Link to="/Lisc">Technology Licensing</Link>
                                <Link to="/Startup">Startup Facilitation</Link>
                            </div>
                        )}
                    </div>

                    {/* Dropdown for Technology */}
                    <div
                        className="dropdown"
                        onMouseEnter={() => handleMouseEnter('technology')}
                        onMouseLeave={() => handleMouseLeave('technology')}
                    >
                        <Link to="/technology" className="dropdown-link">
                            Technology
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="dropdown-icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </Link>
                        {dropdownVisible.technology && (
                            <div className="dropdown-menu">
                                <Link to="/Tech_res">Our Research</Link>
                                <Link to="/Tech_tech">Our Technology</Link>
                                <Link to="/IPR">Our IPR</Link>
                            </div>
                        )}
                    </div>

                    {/* Dropdown for Resources */}
                    <div
                        className="dropdown"
                        onMouseEnter={() => handleMouseEnter('resources')}
                        onMouseLeave={() => handleMouseLeave('resources')}
                    >
                        <Link to="/resources" className="dropdown-link">
                            Resources
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="dropdown-icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </Link>
                        {dropdownVisible.resources && (
                            <div className="dropdown-menu">
                                <Link to="/Fac_Res">Faculty and Staff</Link>
                                <Link to="/Stu_Res">Student</Link>
                                <Link to="/Par_Res">Partners</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/collaborate">Collaborate</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/contact">Contact Us</Link>
                    {/* <Link to="/admin">Admin Dashboard</Link> */}
                    <Link to="/admin/login">Login as Admin</Link>

                </nav>
            </div>
        </header>
    );
}

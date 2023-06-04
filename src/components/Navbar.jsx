import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { Humberger } from "../assets/images";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(true);
    const location = useLocation();
    const route = location.pathname;

    return (
        <nav className="fixed backdrop-blur-sm w-full z-10">
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center">
                    <div className="font-violet text-[#6D60FE] hover:text-[#FF601D] hover:cursor-pointer">
                        <p className="text-sm">OneSide</p>
                        <p className="text-3xl font-bold">Gallery</p>
                    </div>
                    <div onClick={() => setIsMobile(true)}>
                        <ul
                            className={
                                isMobile
                                    ? "hidden md:flex justify-between items-center font-violet"
                                    : "flex flex-col justify-between items-center font-violet w-40"
                            }
                        >
                            <Link
                                to={"/"}
                                className={
                                    route === "/" ? "activeLink" : "link"
                                }
                            >
                                Home
                            </Link>
                            <Link
                                to={"/galerry"}
                                className={
                                    route === "/galerry" ? "activeLink" : "link"
                                }
                            >
                                Gallery
                            </Link>
                            <Button type="btnTransparent" text="Login" />
                            <Button
                                type="btnPurple"
                                text="Join the Community"
                            />
                        </ul>
                    </div>
                </div>
            </div>
            <button
                className="sm:hidden absolute bottom-0 p-3 right-0"
                onClick={() => setIsMobile(!isMobile)}
            >
                <img src={Humberger} alt="mobile menu" className="w-10" />
            </button>
        </nav>
    );
};

export default Navbar;

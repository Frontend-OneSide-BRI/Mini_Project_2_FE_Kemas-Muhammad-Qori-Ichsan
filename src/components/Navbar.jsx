import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
    const location = useLocation();
    const route = location.pathname;

    return (
        <nav className="fixed w-full z-10">
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center">
                    <div className="font-violet text-[#6D60FE] hover:text-[#FF601D] hover:cursor-pointer">
                        <p className="text-sm">OneSide</p>
                        <p className="text-3xl font-bold">Gallery</p>
                    </div>
                    <div className="flex justify-between items-center font-violet">
                        <Link
                            to={"/"}
                            className={route === "/" ? "activeLink" : "link"}
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
                        <Button type="btnPurple" text="Join the Community" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

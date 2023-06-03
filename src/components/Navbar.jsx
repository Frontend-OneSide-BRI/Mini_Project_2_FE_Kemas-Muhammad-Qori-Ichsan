import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed container mx-16 px-4 py-4">
            <div className="flex justify-between items-center">
                <div className="font-violet flex text-[#6D60FE] hover:text-[#FF601D] hover:cursor-pointer">
                    <img
                        src="https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685464311/oneArt/logo-project_qwfhjo.png"
                        alt=""
                        width={60}
                    />
                    <div className="ml-3">
                        <p className="text-sm">OneSide</p>
                        <p className="text-3xl">Gallery</p>
                    </div>
                </div>
                <div className="flex justify-between items-center font-violet">
                    <Link
                        to={"/"}
                        className="font-bold hover:text-[#6D60FE] transition duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        to={"/"}
                        className="mx-5 hover:text-[#6D60FE] transition duration-200"
                    >
                        Gallery
                    </Link>
                    <Link
                        to={"/"}
                        className="rounded-xl ml-3 px-7 py-2 transition duration-200 border-2 hover:bg-purple hover:text-white border-black"
                    >
                        Login
                    </Link>
                    <Link
                        to={"/"}
                        className="bg-purple hover:bg-orange transition duration-200 rounded-xl ml-3 px-7 py-2 text-white border-2 border-black"
                    >
                        Join the Community
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { searchIcon } from "../assets/images";
import Button from "../components/Button";
import { allData } from "../data/data";
import Content from "../components/Content";

const Gallery = () => {
    const [data, setData] = useState(allData);
    const [search, setSearch] = useState("");

    const getGifs = () => {
        const filterData = allData.filter((items) => items.category === "GIFs");
        console.log(filterData);
        setData(filterData);
    };

    const getClips = () => {
        const filterData = allData.filter(
            (items) => items.category === "Clips"
        );
        setData(filterData);
    };

    const getStickers = () => {
        const filterData = allData.filter(
            (items) => items.category === "Stickers"
        );
        setData(filterData);
    };

    const handleChange = () => {
        const filterData = allData.filter((items) => items.name === search);
        setData(filterData);
    };

    return (
        <div className="bg-base">
            <Navbar />
            <div className="w-screen h-[50vh] md:h-[60vh] flex justify-center items-end bg-base font-violet">
                <div className="text-center font-violet">
                    <div className="flex items-center justify-center mb-2">
                        <h1 className="text-3xl md:text-6xl">Sparks</h1>
                        <p className="text-base md:text-lg bg-purple transform transition duration-200 hover:rotate-6 -rotate-6 ml-2 p-3 rounded text-white border-2 border-black">
                            Curiosity
                        </p>
                        <h1 className="text-3xl md:text-6xl ml-3">By</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <h1 className="text-3xl md:text-6xl">
                            Looking at Funny
                        </h1>
                        <p className="text-base md:text-lg bg-orange transform transition duration-200 hover:-rotate-6 rotate-6 ml-2 p-3 rounded text-white border-2 border-black">
                            Pictures
                        </p>
                    </div>
                    <div className="flex relative items-center mt-10">
                        <input
                            type="text"
                            placeholder="Search any assets"
                            className="rounded w-full relative px-3 focus:border-black h-12 border-2 border-black customShadow"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="" onClick={handleChange}>
                            <img
                                src={searchIcon}
                                alt="search"
                                className="w-12 absolute bottom-0 right-0 p-3 rounded border-2 bg-transparent hover:bg-purple transition duration-200 border-black"
                            />
                        </button>
                    </div>
                    <div className="my-4">
                        <Button
                            type="btnSecondaryPurple"
                            text="GIFs"
                            onClick={getGifs}
                        />
                        <Button
                            type="btnSecondaryTransparent"
                            text="Stickers"
                            onClick={getStickers}
                        />
                        <Button
                            type="btnSecondaryOrange"
                            text="Clips"
                            onClick={getClips}
                        />
                    </div>
                </div>
            </div>
            <Content data={data} />
        </div>
    );
};

export default Gallery;

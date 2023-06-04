import React from "react";
import Slider from "./Slider";
import Button from "./Button";

const Featured = () => {
    return (
        <div className="w-screen h-screen flex justify-evenly items-center bg-base">
            <div className="flex justify-between items-center w-1/3">
                <div className="text-center font-violet font-bold">
                    <div className="flex items-center justify-center mb-2">
                        <h1 className="text-4xl">What OneSide</h1>
                        <p className="text-base bg-purple transform transition duration-200 hover:rotate-6 -rotate-6 ml-2 p-3 rounded text-white border-2 border-black">
                            Art
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <h1 className="text-4xl">Can Provide</h1>
                        <p className="text-base bg-orange transform transition duration-200 hover:-rotate-6 rotate-6 ml-2 p-3 rounded text-white border-2 border-black">
                            You
                        </p>
                    </div>
                    <p className="my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore quae consequatur minima. Ipsam, numquam eaque!
                    </p>
                    <Button type="btnSecondaryPurple" text="View GIFs" />
                    <Button
                        type="btnSecondaryTransparent"
                        text="View Stickers"
                    />
                    <Button type="btnSecondaryOrange" text="View Clips" />
                </div>
            </div>

            <div className="w-1/2 p-5 rounded-sm transform -rotate-3 bg-purple border-2 border-black bigShadow">
                <Slider />
            </div>
        </div>
    );
};

export default Featured;

import React from "react";
import Button from "./Button";

const Heroes = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-base font-violet">
            <div className="text-center">
                <h1 className="text-center text-3xl md:text-6xl">
                    Where The{" "}
                    <span className="bg-orange text-xl p-4 md:text-3xl rounded border-2 border-black">
                        GIF
                    </span>{" "}
                </h1>
                <h1 className="text-center items-center text-3xl md:text-6xl my-4 flex justify-center">
                    Image Has Soul to{" "}
                    <img
                        src="https://media3.giphy.com/media/GR4U8hwGbFIIjpFA0m/giphy.gif?cid=ecf05e47lqjbqnsc4hsnuf4uppcyv8rdbq7sjs5kvyetdxsj&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                        alt="giphy"
                        className="ml-2 w-16"
                    />
                </h1>
                <p className="text-center text-sm px-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, ad.
                </p>
                <p className="mb-5 text-center text-sm px-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, quibusdam error. Reiciendis possimus tempora earum?
                </p>
                <Button text="Explore More" type="btnPurple" />
            </div>
        </div>
    );
};

export default Heroes;

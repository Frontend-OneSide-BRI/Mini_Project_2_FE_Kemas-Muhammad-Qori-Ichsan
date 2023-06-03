import React from "react";
import { useLocation } from "react-router-dom";

const Heroes = () => {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-base font-violet">
            <div className="text-center">
                <h1 className="text-center text-6xl">
                    Where The{" "}
                    <span className="bg-orange p-4 text-3xl rounded border-2 border-black">
                        GIF
                    </span>{" "}
                </h1>
                <h1 className="text-center text-6xl my-4 flex justify-center">
                    Image Has Soul to{" "}
                    <img
                        src="https://media3.giphy.com/media/GR4U8hwGbFIIjpFA0m/giphy.gif?cid=ecf05e47lqjbqnsc4hsnuf4uppcyv8rdbq7sjs5kvyetdxsj&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                        alt="giphy"
                        className="ml-2"
                        width={60}
                    />
                </h1>
                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, ad.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, quibusdam error. Reiciendis possimus tempora earum?
                </p>
                <button className="shadow-black px-5 py-2 text-white bg-purple mt-3 rounded-3xl border-2 border-black">
                    Explore More <span className="text-xs ml-1">&gt;</span>
                </button>
            </div>
        </div>
    );
};

export default Heroes;

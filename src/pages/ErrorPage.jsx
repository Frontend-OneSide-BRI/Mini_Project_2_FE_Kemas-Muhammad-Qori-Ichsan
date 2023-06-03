import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="text-center">
                <h1 className="text-3xl">
                    {" "}
                    Oops!{" "}
                    <img
                        src="https://media1.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif?cid=ecf05e47jqxutclqum9rk6ihzbpdfrzkid69dy425juyxxfu&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                        alt="error"
                        width={350}
                    />
                </h1>
                <p className="text-xl my-3">an unexpected error has accured</p>

                <Link
                    to={"/"}
                    className="bg-purple px-3 py-1 text-white border-2 border-black rounded"
                >
                    Go Back{" "}
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;

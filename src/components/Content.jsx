import React from "react";

const Content = ({ data }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:mb-0 mb-16">
            {data ? (
                data.map((item, index) => (
                    <div
                        className="relative  bg-gradient-to-t from-[rgb(27_27_27/25%)] to-transparent"
                        key={index}
                    >
                        <img
                            src={item.image}
                            alt="content gif"
                            className="aspect-square w-full"
                        />
                        <div className="absolute bottom-0 left-0 p-2">
                            <p className="text-white md:text-base text-sm font-bold">
                                {item.name}
                            </p>
                            <p className="text-white text-xs">
                                {item.username}
                            </p>
                            <p className="text-white text-xs">
                                {item.category}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="col-span-4 text-3xl text-center p-4 my-5 text-[#6D60FE]">
                    Nothing to show
                </p>
            )}
        </div>
    );
};

export default Content;

import React from "react";

const Button = (props) => {
    const { type, text, onClick } = props;

    return (
        <button onClick={onClick} className={type}>
            {text}
        </button>
    );
};

export default Button;

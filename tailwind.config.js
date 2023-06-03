/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            "violet": ["violet", "cursive"],
        },
        backgroundColor: {
            transparent: "transparent",
            base: "#F1F7F1",
            purple: "#6D60FE",
            orange: "#FF601D",
        },
    },
    plugins: [],
};

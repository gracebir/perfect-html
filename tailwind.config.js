/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                activeColor: "#2A3958",
                "light-gray": "#EBEEF3",
                "gray-color": "#B1B4BB",
                "dark-gray": "#5A616A",
                "primary-color": "#222222",
            },
        },
    },
    plugins: [],
};

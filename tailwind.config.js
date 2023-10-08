/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'nav-color': '#003540',
                'purple': '#3f3cbb',
                'midnight': '#121063',
                'metal': '#565584',
                'tahiti': '#3ab7bf',
                'silver': '#ecebff',
                'bubble-gum': '#ff77e9',
                'bermuda': '#78dcca',
                'silver-teal': '#00adb5',
                'hover-silver-teal': '#00B5BD',
                'black': '#000000'
        },
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};


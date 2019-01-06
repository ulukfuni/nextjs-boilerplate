const primaryColor = 'orange'
export default {
    fonts: {
        sans: 'Open Sans, sans-serif',
        serif: 'EB Garamond, serif'
    },
    colors: {
        primary: primaryColor,
        gray: '#f0f0f0',
        lighterGray: '#f8f8f8',
        lightGray: '#e8e8e8',
        offWhite: '#f7f7f7',
        darkGray: '#4e4e4e',
    },
    breakpoints: [
        '576px', '768px', '992px', '1200px',
    ],
    space: [
        0, 4, 8, 16, 32, 64, 128, 256,
    ],
    fontSizes: [
        6, 8, 10, 12, 14, 16, 20, 24, 32, 48, 64,
    ],
    fontWeights: {
        normal: 400,
        bold: 700,
    },
    shadows: {
        tiny: '0 1.5px 5px 0 rgba(0, 0, 0, 0.1)',
        small: '0px 0px 5px 0px rgba(0,0,0,0.2)',
        tabs: '0 0 4px 0 rgba(0, 0, 0, 0.1)',
    },
    buttons: {
        primary: {
            backgroundColor: primaryColor,
        },
        transparent: {
            backgroundColor: 'transparent',
            color: primaryColor,
            borderColor: primaryColor,
            border: '1px solid',
        },
        grey: {
            fontSize: '10px',
            color: '#333',
            backgroundColor: '#e5e5e5',
        },
        white: {
            backgroundColor: '#ffffff',
            boxShadow: '0 1.5px 5px 0 rgba(0, 0, 0, 0.1)',
            color: 'black',
        },
    },
    cards: {
        primary: {
            backgroundColor: primaryColor,
            boxShadow: '0 1.5px 5px 0 rgba(0, 0, 0, 0.1)',
        },
    },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        screens: {
            sm: "540px",
            md: "720px",
            lg: "960px",
            xl: "1140px",
            "2xl": "1320px",
        },
        extend: {
            hover: {
                'hover': 'last:flex'
            },
            boxShadow: {
                'blue': '0px 10px 30px rgba(0, 67, 255, 0.25)',
            },
            colors: {
                yellow: {
                    333: '#FFD15C',
                    444: '#F9C541',
                },
                blue: {
                    777: '#092C8F',
                    333: '#3964DB',
                },
                grey: {
                    222: '#D9D9D9',
                },
            }
        },
    },
    plugins: [],
}
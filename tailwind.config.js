/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./views/**/*.vue",
        "./error.vue",
    ],
    theme: {
        extend: {},
        screens: {
            'sm': '640px',
            'md': '900px',
            'lg': '1280px',
            'xl': '1536px',
        },
    },
    plugins: [
        require('daisyui'),
    ],
}
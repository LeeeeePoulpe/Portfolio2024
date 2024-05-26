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
            'xs': '375px',
            'sm': '390px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1536px',
        },
    },
    plugins: [
        require('daisyui'),
    ],
}
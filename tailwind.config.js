/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerBg: "url('/banner.svg')",
        worldBg: "url('/world.svg')",
        farmerBg: "url('https://i.ibb.co/JFWbHSb/eduardo-prim-3u51-u-LQICc-unsplash-1.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "business"],
  },
}
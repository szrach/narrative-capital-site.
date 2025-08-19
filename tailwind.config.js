/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#F8F9FB",        // light section
        card: "#FFFFFF",
        border: "#E5E7EB",
        heading: "#0B1220",        // near-black
        body: "#4B5563",           // neutral-600
        gold: "#D4AF37"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        "2xl": "1rem"
      }
    }
  },
  plugins: []
}

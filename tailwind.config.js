// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"], // Removed TS files if not needed
  theme: {
    extend: {
      animation: {
        meteor: "meteor 10s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "translateY(-20%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};

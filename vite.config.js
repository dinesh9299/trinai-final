// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import path module

export default defineConfig({
  plugins: [react()],
  // base: "/trinai_temp/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Define @ alias to src folder
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: "./", // Adjust the base path for GoDaddy deployment
// });

// import { defineConfig } from "vite";

// export default defineConfig({
//   base: "/s6h.in/trinai-temp/", // Set this to your deployment subdirectory
// });

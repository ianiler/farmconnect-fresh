// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},   // ✅ the only correct Tailwind v4 plugin
    autoprefixer: {},
  },
};

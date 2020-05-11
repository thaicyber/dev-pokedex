/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- external ---------------------- */
const path = require('path');

/* ------------------------------------------------------ */
/*                         Config                         */
/* ------------------------------------------------------ */
// check environment
const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  env: {
    BASE_URL: dev
      ? 'http://localhost:3000'
      : 'https://dev-pokedex.herokuapp.com'
  }
};

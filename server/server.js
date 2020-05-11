/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
// server and SSR frameworks
const express = require('express');
const next = require('next');
// env variables
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config/config.env` });
// database
const connectDB = require('./database/connectDB');
connectDB();
// router
const pokemonRouter = require('./routes/pokemon.router');

/* ------------------------------------------------------ */
/*           Next.js / Express.hs Custom Server           */
/* ------------------------------------------------------ */
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  /* ----------------- Uncaught Exception ----------------- */
  process.on('uncaughtException', (err) => {
    console.log(err.name, err.message);
    console.log('💥💥💥', 'UNCAUGHT EXCEPTION! Shutting down...');
    process.exit(1);
  });

  /* ----------------------- Server ----------------------- */
  const server = express();

  server.use('/api/v1/pokemons', pokemonRouter);

  const serverErrorHandler = require('./utils/serverErrorHandler');
  server.use(serverErrorHandler);

  server.all('*', (req, res) => handle(req, res));

  const serverConnect = server.listen(port, (err) => {
    if (err) throw err;
    console.log('🌟🌟🌟', `>>> Ready on http://localhost:${port}`);
  });

  /* ------------- Undandled Promise Rejection ------------ */
  process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message);
    console.log('💥💥💥', 'UNHANDLED REJECTION! Shutting down...');
    serverConnect.close(() => process.exit(1));
  });
});

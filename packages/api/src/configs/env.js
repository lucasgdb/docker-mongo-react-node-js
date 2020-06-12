const customEnv = require('custom-env');

const { NODE_ENV } = process.env;

if (NODE_ENV === 'development') {
  customEnv.env('development');
} else if (NODE_ENV === 'production') {
  customEnv.env('production');
} else {
  customEnv.env();
}

const { MONGO_URL, SECRET_HASH, PORT } = process.env;

module.exports = {
  MONGO_URL,
  SECRET_HASH,
  PORT,
};

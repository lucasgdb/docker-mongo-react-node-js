const mongoose = require('mongoose');

const { MONGO_URL } = require('../configs/env');

mongoose.connect(
  MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;

    // eslint-disable-next-line no-console
    console.log('database connected!');
  },
);

mongoose.Promise = global.Promise;

module.exports = mongoose;

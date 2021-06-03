require('dotenv').config();
const connectDb = require('./db/mongodb');
const app = require('./app');
const { appConfig, db } = require('./config');

const port = appConfig.port;

const initApp = async() => {
  try {
    await connectDb(db);
    app.listen(port, () =>
      console.log(`Listen on  ${port}`)
    );
  } catch(e) {
    console.error(e)
    process.exit(0)
  }
};

initApp()

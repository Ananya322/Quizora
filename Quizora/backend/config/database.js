const mongoose = require("mongoose");
const MONGO_CONSTANTS = require("../constants/database");
require("dotenv").config();

const URL = MONGO_CONSTANTS.MONGO_URL;

(async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log("error occured: ", e.toString());
  }
})();



const app = require("./app");
const connectDataBase = require("./config/database");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
//set up config file
dotenv.config({ path: "backend/config/config.env" });

//connecting to DB
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `server started on port :${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});

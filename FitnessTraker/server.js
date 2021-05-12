const mongoose = require("mongoose");
const logger = require("morgan");
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();



app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/routesA.js"));

require("./routes/routesH.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

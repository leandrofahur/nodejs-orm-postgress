const express = require("express");
const db = require("./config/db");

const app = express();

db.authenticate()
  .then(() => console.log("Postgres connected."))
  .catch((error) => console.error(error));

app.use(express.json({ extended: true }));
app.use("gigs", require("./routes/Gigs"));

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Users App",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.info(`Server up and running on port ${PORT}`);
});

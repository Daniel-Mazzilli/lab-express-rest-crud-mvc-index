// Dependencies
const app = require("./app");

// Config
require("dotenv").config();
const PORT = process.env.PORT || 3333;

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

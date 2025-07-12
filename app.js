const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

require("./config/passport");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const authorsRoute = require("./routes/AuthorsRoute");
app.use("/authors", authorsRoute);

const commentsRoute = require("./routes/CommentsRoute");
app.use("/comments", commentsRoute);

const postsRoute = require("./routes/PostsRoute");
app.use("/posts", postsRoute);

const readersRoute = require("./routes/ReadersRoute");
app.use("/readers", readersRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
  console.log(`Link is http://localhost:${PORT}/`);
});

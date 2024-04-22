const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api");
const customMiddleware = require("./middlewares/customMiddleware");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting up a Template Engine
app.set("view engine", "ejs");

// Static Files
app.use(express.static("public"));

// Custom Middleware
app.use(customMiddleware);

// Root Route
app.get("/", (req, res) => {
  res.render("index", { title: "Home" }); // Make sure you have an index.ejs file in your views directory
});

// API Routes
app.use("/api", apiRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3000;
// // ---------------------------[Require Stmnts]

// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine())

// // ---------------------------[Middleware]

// const fruits = require('./models/fruits.js');

// // ---------------------------[Data]

// app.get("/fruits", (req, res) => {
//   res.render("Index",{fruits: fruits})
// });
// // ---------------------------------------------[Index =  GET ]

// app.get("/fruits/:indexOfFruitsArray", (req, res) => {
//   res.render("Show",{
//     fruit: fruits[req.params.indexOfFruitsArray]
//   })
// });
// // ---------------------------------------------[Show =  GET ]

// // ---------------------------[Routes]--save

// app.listen(PORT, () => {
//   console.log(`Listening on Port: 3000`);
// });
// // ---------------------------[Server]

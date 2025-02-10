const express = require("express");
const app = express();
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { userAuth } = require("./middlewares/auth");
const User = require("./models/user");
const authRouter = require("./routes/auth");

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5174","https://elementalx-assignment.vercel.app/"],
  credentials: true
}));
app.use(cookieParser());

app.use("/",authRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/users",userAuth,async (req,res) => {
    
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users : ',error);
        res.status(500).json({error: 'Internal server error'});
    }
})

connectDB()
  .then(() => {
    console.log("Database connection established!!");
    app.listen(3000, () => {
      console.log("Server is listening on the port : 3000");
    });
  })
  .catch((err) => {
    console.log("Error while connecting to the databse : ", err);
  });
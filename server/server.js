// CREATE THE SERVER
const ex = require("express")
const app = ex()
const _PORT = process.env.PORT;
app.use(ex.json())
const cors = require("cors")
app.use(cors())


// CONNECT TO THE DATABASE
const userName = process.env.USERNAME ,
      password = process.env.PASSWORD,
      DB =process.env.DATABASE

const db = require("mongoose")
db.connect(`mongodb+srv://${userName}:${password}@cluster0.5lwdldx.mongodb.net/${DB}?retryWrites=true&w=majority`)



// USER MODEL
const UserModel = require("./Models/User")


// RUN THE SERVER
app.listen(_PORT, () => {
    console.log("server is running on port 3001")
})

// GET REQUEST
app.get("/users", async(req, res) => {
    const data = await UserModel.find();
    res.json(data);
})


app.post("/addUser", async(req, res) => {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.json(req.body)
})


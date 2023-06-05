const ex = require("express")

const db = require("mongoose")

const cors = require("cors")

const app = ex()

app.use(ex.json())
app.use(cors())

const UserModel = require("./Models/User")

db.connect("mongodb+srv://ahmedAbdulrahman:tWpGR791JojHWGkn@cluster0.5lwdldx.mongodb.net/MERN_DB?retryWrites=true&w=majority")


app.listen(3000, () => {
    console.log("server is running on port 3000")
})


app.get("/users", async(req, res) => {
    const data = await UserModel.find();
    res.json(data);
})


app.post("/addUser", async(req, res) => {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.json(req.body)
})


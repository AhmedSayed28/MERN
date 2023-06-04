const ex = require("express")

const db = require("mongoose")

const UserModel = require("./Models/User")

db.connect("mongodb+srv://ahmedAbdulrahman:tWpGR791JojHWGkn@cluster0.5lwdldx.mongodb.net/MERN_DB?retryWrites=true&w=majority")

const app = ex();

app.listen(3000, () => {
    console.log("server is running on port 3001")
})

app.get("/", async(req, res) => {
    const data = await UserModel.find();
    res.json(data);
})
const mon  = require("mongoose");

const UserSchema = new mon.Schema({
    name: {type: String},
    age: {type: Number},
    email:{type: String}
})
const UserModel = mon.model("users",UserSchema)
module.exports = UserModel;
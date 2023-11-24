const mongoose = require("mongoose")
const schema = mongoose.Schema
const categorySchema = new schema({
    name: String,
    colorcode: String
})
const CATEGORY = mongoose.model("category", categorySchema)
module.exports = CATEGORY
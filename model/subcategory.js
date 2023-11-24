const mongoose = require("mongoose")
const schema = mongoose.Schema
const subcategorySchema = new schema({
    name: String,
    category: {
        type: schema.Types.ObjectId,
        ref: "category"
    }
})
const SUBCATEGORY = mongoose.model("subcategory", subcategorySchema)
module.exports = SUBCATEGORY
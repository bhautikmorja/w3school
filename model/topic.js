const mongoose = require("mongoose")
const schema = mongoose.Schema
const topicSchema = new schema({
    name: String,
    description: String,
    image: String,
    subcategory: {
        type: schema.Types.ObjectId,
        ref: "subcategory"
    }
})
const TOPIC = mongoose.model("topic", topicSchema)
module.exports = TOPIC
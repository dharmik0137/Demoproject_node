const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    post_id: {
        type: String, Number
    },
    like: {
        type: Boolean
    }
})
const like_data = new mongoose.model("like", likeSchema);

module.exports = like_data;
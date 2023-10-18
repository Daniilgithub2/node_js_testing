const mongoose = require("mongoose"),
    subscriberSchema = mongoose.Schema({
        name: String,
        email: String,
        zipCode: Number,
        vip: Boolean
});

module.exports = mongoose.model("Subscriber", subscriberSchema);
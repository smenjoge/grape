const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    Date: String,
})

    const Event = mongoose.model("Event", EventSchema);

    module.exports = Event;

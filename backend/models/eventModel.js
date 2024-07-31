const { time } = require("console");
const { date, required } = require("joi");
const mongoose = require("mongoose");
const { type } = require("os");
const { title } = require("process");

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  time: String,
  location: String,
  description: String,
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Event", EventSchema);

const { validation } = require("../middleware/validation");
const Event = require("../models/eventModel");

exports.createEvent = async (req, res) => {
  let event = new Event(req.body);

  try {
    if (event) {
      const savedEvent = await event.save();
      res.status(201).json(savedEvent);
    }
    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.listAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({ events });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
exports.getEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Event.findById(id);

    if (!user) {
      res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateEventById = async (req, res) => {
  //   const { error } = validation(req.body);
  //   if (error)
  //     return res.status(400).json({
  //       success: false,
  //       message: err.message,
  //     });

  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body);
    if (event) {
      return res.status(200).json({
        success: true,
        data: event,
      });
    }
    res.status(200).json({ event });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
exports.softDeleteById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Event.findById(id);

    user.isDeleted = true;
    user.save();

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

import { model, Schema } from "mongoose";

const RobotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    reqired: true,
  },
  endurance: {
    type: Number,
    requred: true,
  },
  dateOfCreation: {
    type: Date,
    default: Date.now(),
  },
});

const Robot = model("Robot", RobotSchema, "robots");

export default Robot;

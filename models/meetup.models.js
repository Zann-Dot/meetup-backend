import mongoose from "mongoose";
const eventSchema = new mongoose.Schema({
  meetName: String,
  isOnline: Boolean,
  imageUrl: String,
  hosted: String,
  details: String,
  additionalInfo: { type: Object },
  eventTags: [String],
  sessionStartTime: String,
  sessionEndTime: String,
  eventVenue: String,
  isPaid: Boolean,
  paidRupees: { type: Number, default: 0 },
  speakers: [{ name: String, designation: String, imageUrl: String }],
});

const Events = mongoose.model("Events", eventSchema);
export default Events;

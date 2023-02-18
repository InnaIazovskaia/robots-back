import mongoose from "mongoose";

const connectDataBase = async (connectionString: string) => {
  try {
    await mongoose.connect(connectionString);
    mongoose.set("debug", true);
    mongoose.set("toJSON", {
      virtuals: true,
      transform(doc, ret) {
        delete ret._id;
        delete ret.__v;
      },
    });
  } catch (error) {
    throw new Error("Database not connected");
  }
};

export default connectDataBase;

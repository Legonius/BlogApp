import mongoose from "mongoose";

export default async function connectDB(url) {
  await mongoose
    .connect(url)
    .then((x) => console.log("MongoDB is Connected..."));
}

/*
, {
  tls: true,
  tlsInsecure: true, // Only for development. Remove in production.
}
  */

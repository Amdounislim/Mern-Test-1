const mongoose = require("mongoose");
const config = require("config");

// const connectDB = () => {
//   mongoose
//     .connect(config.get("MONGO_URI"), {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(console.log("mongoose connected"))
//     .catch((err) => console.log(err));
// };

const connectDB = async () => {
  try {
    mongoose.connect(
      config.get("MONGO_URI"),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => (err ? console.log(err) : console.log("mongoose connected"))
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

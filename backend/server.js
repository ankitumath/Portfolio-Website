const contactRoutes = require("./routes/contactRoutes");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes)

app.get("/", (req, res) => {
  res.json({
    message: "Portfolio API Running",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
const Contact = require("./models/contact");

console.log(Contact.modelName);
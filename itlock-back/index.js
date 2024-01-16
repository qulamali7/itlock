import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose, { Schema } from "mongoose";
const app = express();
app.use(cors());
app.use(express.json());

const brandSchema = new Schema({
  img: String,
  title: String,
  category: String,
});

const BrandModel = mongoose.model("brands", brandSchema);

app.get("/brands", async (req, res) => {
  const brands = await BrandModel.find({});
  res.send(brands);
});

app.get("/brands/:id", async (req, res) => {
  const { id } = req.params;
  const brand = await BrandModel.findById(id);
  res.send(brand);
});

app.post("/brands", async (req, res) => {
  const { img, title, category } = req.body;
  const newBrand = new BrandModel({ img, title, category });
  await newBrand.save();
  res.send("Got a POST request");
});

app.put("/brands/:id", async (req, res) => {
  const { id } = req.params;
  const { img, title, category } = req.body;
  const brand = await BrandModel.findByIdAndUpdate(id, {
    img,
    title,
    category,
  });
  res.send("Got a PUT request at /brand");
});

app.delete("/brands/:id", async (req, res) => {
  const { id } = req.params;
  const brand = await BrandModel.findByIdAndDelete(id);
  res.send("Got a DELETE request at /brand");
});

mongoose
  .connect(process.env.KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

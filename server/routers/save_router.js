import express from "express";
import fetch from "node-fetch"; // to dl the dog image
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload_directory = path.join(__dirname, "../uploads");

// download and save image to server
const downloadImage = async (url, filename) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch the dog image");
  }

// unsure if i should have used multer here instead
// doc said 'Allow uploading random dog image to Express using submit button' 
// so i had the image save on a button click

// help with array buffer found here 
// https://chrisfrew.in/blog/saving-images-in-node-js-using-fetch-with-array-buffer-and-buffer/

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const filePath = path.join(upload_directory, filename);
  await fs.promises.writeFile(filePath, buffer); // Save the image to the server

  return filename; // Return the filename
};

// saving dog image
router.post("/dog", async (req, res) => {
  const { imageUrl } = req.body; // URL of the dog image
  
  if (!imageUrl) {
    return res.status(400).json({ error: "No image URL provided" });
  }

  try {
    const filename = `dog-${Date.now()}.jpg`;
    await downloadImage(imageUrl, filename); //download here

    // message shown on save
    res.json({
      message: "Dog image saved successfully",
      filePath: `/uploads/${filename}`,
    });
  } catch (error) {
    console.error("Error saving dog image:", error);
    res.status(500).json({ error: "Failed to save dog image" });
  }
});

export default router;

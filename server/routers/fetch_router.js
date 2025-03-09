import express from "express";
import fs from "fs";
import path from "path";
import _ from "lodash";
import { fileURLToPath } from "url"; // for file path
import mime from 'mime-types';

const router = express.Router();

// grab the current directory to this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // this will link us to the router folder
// we need to move from /server/routers to /server/uploads
const upload_directory = path.join(__dirname, "../uploads");

router.get("/single", (req, res) => {
  // we read the directory items synchronously to not trip the async speed
  let files_array = fs.readdirSync(upload_directory);
  // error checking
  if (files_array.length == 0) {
    // adding return will stop the rest of the operations
    return res.status(503).send({
      message: "No images",
    });
  }
  let filename = _.sample(files_array);
  res.sendFile(path.join(upload_directory, filename));
});

//multiple helper
router.get('/file/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '../uploads', filename);
  // this helper did not grab images correctly without explicitly setting the mime type
  // it was always set as html

  // check for file
  if (fs.existsSync(filePath)) {
    const mimeType = mime.lookup(filePath);
    if (!mimeType) {
      return res.status(415).send('Unsupported Media Type');  // Handle unsupported mime type
    }
    // set content type
    res.setHeader('Content-Type', mimeType);

    // serve image
    res.sendFile(filePath);
  } else {
    res.status(404).send('File not found');
  }
});

// get dog image from the uploads folder, similar to the 'multiple' helper
router.get('/dog/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '../uploads', filename);

  if (fs.existsSync(filePath)) {
    const mimeType = mime.lookup(filePath);
    if (!mimeType) {
      return res.status(415).send('Unsupported Media Type');
    }

    res.setHeader('Content-Type', mimeType);
    res.sendFile(filePath);
  } else {
    res.status(404).send('Dog image not found');
  }
});

router.get("/multiple", (req, res) => {
  let files_array = fs.readdirSync(upload_directory);
  // error checking
  if (files_array.length == 0) {
    // adding return will stop the rest of the operations
    return res.status(503).send({
      message: "No images",
    });
  }
  let filenames = _.sampleSize(files_array, 3);

  res.json(filenames);
});

export default router;

import express from "express"; 
import cors from 'cors';
import multer from 'multer';

import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniquePrefix + file.fieldname);
  }
})

const upload = multer({ storage: storage })

 
const app = express();
const PORT = process.env.PORT || 8000;
 
// middlelware
app.use(cors());
// for html forms
app.use(express.urlencoded({extended: true})); 
// extracts application/json data
app.use(express.json());
 
// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

app.get("/data", (req, res) => {
    const data = {
        fName: "Dani",
        lName: "Leslie"
    }
    res.send(data);
  });

  app.post('/login', (req, res) => {
    console.log(req.body);
    res.send("Data stolen");
  })
 
app.post('/fileform', upload.single("file"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.json("Info received");
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});
 
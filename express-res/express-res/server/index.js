import express from "express";
import cors from "cors";
// routers
import eduRoutes from "./routers/eduRoutes.js";
import expRoutes from "./routers/expRoutes.js";
import overRoutes from "./routers/overRoutes.js";
import skillRoutes from "./routers/skillRoutes.js";

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(cors());

// imported routers
app.use("/getEdu", eduRoutes); 
app.use("/getExp", expRoutes);  
app.use("/getOverview", overRoutes);
app.use("/getSkills", skillRoutes);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to the server, Check /api-list for available routes");
});

app.get("/api-list", (req, res) => {
  const apiList = {
    res_parts: ["/getEdu", "/getExp", "/getOverview", "/getSkills"],  
  };
  res.send(apiList);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// undefined routes
app.use("", (req, res) => {
  res.send(`No request for ${req.url} exists`);
});

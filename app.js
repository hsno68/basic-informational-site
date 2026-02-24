import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const options = {
  root: path.join(__dirname, "views"),
};

app.get(["/", "/home"], (req, res) => res.sendFile("index.html", options));
app.get("/about", (req, res) => res.sendFile("about.html", options));
app.get("/contact", (req, res) => res.sendFile("contact.html", options));
app.get("/{*splat}", (req, res) => res.sendFile("404.html", options));

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});

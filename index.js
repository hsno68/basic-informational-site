import http from "node:http";
import fs from "node:fs/promises";

const routes = {
  "/": "index.html",
  "/home": "index.html",
  "/about": "about.html",
  "/contact": "contact.html",
};

const server = http.createServer(async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/html");

    const filename = routes[req.url] || "404.html";

    if (!routes[req.url]) {
      res.statusCode = 404;
    }

    const file = await fs.readFile(`./views/${filename}`, "utf8");
    res.end(file);
  } catch (err) {
    res.statusCode = 500;
    res.end("Server Error");
  }
});

server.listen(8080, "localhost", () => {
  console.log("Server running on http://localhost:8080");
});

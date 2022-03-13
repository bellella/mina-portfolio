import serveStatic from "serve-static"
import path from "path"
import express from "express";

const app = express();
app.use(serveStatic(path.join(__dirname, "dist")));
const port = process.env.PORT || 3000;
app.listen(port);

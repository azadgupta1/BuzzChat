// import express from "express";
// import cookieParser from "cookie-parser";
// import path from "path";
// import authRoutes from "./routes/auth.route.js";
// import messageRoutes from "./routes/message.route.js";
// import dotenv from "dotenv";
// import { app, server } from "./socket/socket.js";
// dotenv.config();
// const PORT = process.env.PORT || 5001;
// const __dirname = path.resolve();
// app.use(cookieParser()); // for parsing cookies
// app.use(express.json()); // for parsing application/json
// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// if (process.env.NODE_ENV !== "development") {
// 	app.use(express.static(path.join(__dirname, "/frontend/dist")));
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// 	});
// }
// server.listen(PORT, () => {
// 	console.log("Server is running on port " + PORT);
// });
// import express from "express";
// import path from "path";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import authRoutes from "./routes/auth.route.js";
// import messageRoutes from "./routes/message.route.js";
// import { app, server } from "./socket/socket.js";
// dotenv.config();
// const PORT = process.env.PORT || 5001;
// const __dirname = path.resolve();
// app.use(cookieParser());
// app.use(express.json());
// app.use(express.static(path.join(__dirname, "/frontend/dist")));
// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.get("/", (req, res) => {
//   res.send("Server is up and running!");
// });
// app.get("/testfile", (req, res) => {
//   res.sendFile(path.join(__dirname, "/frontend/dist", "index.html"));
// });
// server.listen(PORT, () => {
//   console.log("Server is running on port " + PORT);
// });
import cookieParser from "cookie-parser";
import express from "express";
import path from "path";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./socket/socket.js";
dotenv.config();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();
app.use(cookieParser()); // for parsing cookies
app.use(express.json()); // for parsing application/json
// Serve static files
app.use(express.static(path.join(__dirname, "/frontend/dist")));
// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
// Catch-all route to serve the frontend application
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
server.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});

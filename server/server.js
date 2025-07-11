const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Route user files
const putRoutesuser = require("./Api/routes/auth user/authPutRoutes.js");
const authgetRoutes = require("./Api/routes/auth user/authgetRoutes.js");
const deleteRoutesuser = require("./Api/routes/auth user/authdeleteRoutes.js");
const loginRoutes = require("./Api/routes/auth user/login.js");
const registerRoutes = require("./Api/routes/auth user/register.js");

// Route jewellery files
const putRoutes = require("./Api/routes/authRoutes/putRoutes.js");
const postRoutes = require("./Api/routes/authRoutes/postRoutes.js");
const deleteRoutes = require("./Api/routes/authRoutes/deleteRoutes.js");
const getRoutes = require("./Api/routes/authRoutes/getRoutes.js");
const getRoutesId = require("./Api/routes/authRoutes/getRoutesId.js");

// User routes
app.use('/api/auth', registerRoutes);
app.use('/api/auth', loginRoutes);
app.use('/api/auth', authgetRoutes);
app.use('/api/auth', putRoutesuser);
app.use('/api/auth', deleteRoutesuser);

// Jewellery routes
app.use("/api/jewellery", getRoutes);
app.use("/api/jewellery", getRoutesId);
app.use("/api/jewellery", postRoutes);
app.use("/api/jewellery", putRoutes);
app.use("/api/jewellery", deleteRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express(); 
const PORT = 5000;

// Middleware

app.use(cors({
    origin: ["https://build-form-final-front.vercel.app"], 
    methods: ["POST", "GET", "OPTIONS"], 
    credentials: true, 
    allowedHeaders: ["Content-Type", "Authorization"] 
}));
app.use(express.static('public'));

const dir = './public/uploads';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

// Setup storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads'); // Save files to the public/uploads folder
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

//endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ filePath: `uploads/${req.file.filename}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

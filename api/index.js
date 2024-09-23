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

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Setup storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ 
    storage,
    limits: { fileSize: 5 * 1024 * 1024 } // Limit to 5 MB
});

// Endpoint
app.post('/upload', (req, res) => {
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    upload.single('file')(req, res, (err) => {
        if (err) {
            console.error('Multer error:', err);
            return res.status(400).json({'Multer error:', err});
        }
        console.log('File uploaded:', req.file);
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        res.json({ filePath: `uploads/${req.file.filename}` });
    });
});



// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message || err); // Log the error message
    res.status(500).send('Something broke!');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

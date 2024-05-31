const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 1337;

app.use(cors());
app.use(express.json());

app.get('/api/students', async (req, res) => {
    try {
        const response = await axios.get('http://3.223.98.72:1337/api/students');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching students');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

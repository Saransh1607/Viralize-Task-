const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const headers = {
  Authorization: 'Bearer ' + process.env.lichessToken,
};

app.use(express.json());

app.get('/api/profile/:username', async (req, res) => {
    try {
        const { username } = req.params;
      //const response = await axios('https://lichess.org/api/account', { headers });
      const response = await axios(`https://lichess.org/api/user/${username}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add more endpoints for other features

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//KAito16
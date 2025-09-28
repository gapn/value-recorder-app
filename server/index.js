const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const sessionRecordings = [];

app.post('/api/recordings', (req, res) => {
    const recordedData = req.body;

    console.log('recieved new recording data:');
    console.log(recordedData);

    res.status(201).json({ message: 'Recording received successfully!' });
});


app.get('/', (req, res) => {
  res.send('Hello from the Value Recorder App Server!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const sessionRecordings = [];

app.post('/api/recordings', (req, res) => {
    const recordedData = req.body;

    const newSession = {
        id: Date.now(),
        name: `Recording @ ${new Date().toLocaleTimeString()}`,
        saveAt: new Date().toISOString(),
        data: recordedData,
    };

    sessionRecordings.push(newSession);

    console.log('recieved new recording data:');
    console.log(recordedData);

    console.log(`Recording saved successfully! Total sessions: ${sessionRecordings.length}`);

    res.status(201).json({ message: 'Recording received successfully!', session: newSession });
});


app.get('/', (req, res) => {
  res.send('Hello from the Value Recorder App Server!');
});

app.get('/api/recordings', (req, res) => {
    res.status(200).json(sessionRecordings);
});

app.get('/api/recordings/:id/csv', (req, res) => {
    const sessionId = parseInt(req.params.id, 10);
    const session = sessionRecordings.find(s => s.id === sessionId);

    if (!session) {
        return res.status(404).send('Session not found');
    };

    const header = 'Timestamp,Value\n';
    const csvRows = session.data.map(log => {
        return log + '\n';
    })
    const csvContent = header + csvRows.join('');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="recording-${sessionId}.csv"`);
    res.status(200).end(csvContent);
});

app.patch('/api/recordings/:id', (req, res) => {
    const sessionId = parseInt(req.params.id, 10);
    const { newName } = req.body;
    const session = sessionRecordings.find(s => s.id === sessionId);

    if (!session) {
        return res.status(404).send('Session not found');
    };

    session.name = newName;

    console.log(`Session${sessionId} renamed to: ${newName}`);
    res.status(200).json(session);
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
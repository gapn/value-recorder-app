import { useState, useEffect } from 'react'

function SessionList() {
    const [sessions, setSessions] = useState([]);

    const fetchSessions = () => {
        fetch('http://localhost:3001/api/recordings')
            .then(response => response.json())
            .then(data => setSessions(data))
            .catch(error => console.error('Error fetching sessions:', error));
    };

    useEffect(() => {
        fetchSessions();
    }, []);
        

    return (
        <>
            <div>
                <h2>Saved Sessions</h2>
                <button onClick={fetchSessions}>Refresh List</button>
                <ul>
                    {sessions.map(session => (
                        <li key={session.id}>
                            Session saved at: {new Date(session.saveAt).toLocaleString()} ({session.data.length} records)
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default SessionList
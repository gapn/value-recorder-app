import { useState, useEffect } from 'react'

function SessionList() {
    const [sessions, setSessions] = useState([]);
    const [selectedSessionData, setSelectedSessionData] = useState(null);

    const fetchSessions = () => {
        fetch('http://localhost:3001/api/recordings')
            .then(response => response.json())
            .then(data => setSessions(data))
            .catch(error => console.error('Error fetching sessions:', error));
    };

    useEffect(() => {
        fetchSessions();
    }, []);
        
    const handleSessionClick = (session) => {
        setSelectedSessionData(session.data);
    };

    return (
        <>
            <div>
                <h2>Saved Sessions</h2>
                <button onClick={fetchSessions}>Refresh List</button>
                <ul>
                    {sessions.map(session => (
                        <li key={session.id}>
                            <span onClick={() => handleSessionClick(session)} style={{cursor: 'pointer'}}>
                                Session saved at: {new Date(session.saveAt).toLocaleString()} ({session.data.length} records)
                            </span>
                            <a 
                                href={`http://localhost:3001/api/recordings/${session.id}/csv`} 
                                download={`recording-${session.id}.csv`}
                                style={{marginLeft: '10px'}}
                            >
                                Download CSV
                            </a>
                        </li>
                    ))}
                </ul>
                {selectedSessionData && (
                    <div>
                        <h3>Selected Session Data:</h3>
                        <div>
                            {selectedSessionData.map((record, index) => (
                                <p key={index}>{record}</p>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default SessionList
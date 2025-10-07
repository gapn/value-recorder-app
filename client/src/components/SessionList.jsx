import { useState, useEffect } from 'react'

function SessionList({ editingSessionId, setEditingSessionId, refreshTrigger }) {
    const [sessions, setSessions] = useState([]);
    const [selectedSessionData, setSelectedSessionData] = useState(null);
    const [newSessionName, setNewSessionName] = useState('');

    const fetchSessions = () => {
        fetch('http://localhost:3001/api/recordings')
            .then(response => response.json())
            .then(data => setSessions(data))
            .catch(error => console.error('Error fetching sessions:', error));
    };

    useEffect(() => {
        fetchSessions();
    }, [refreshTrigger]);
        
    const handleSessionClick = (session) => {
        setSelectedSessionData(session.data);
    };

    const handleRenameClick = (session) => {
        setEditingSessionId(session.id);
        setNewSessionName(session.name);
    };

    const handleSaveRename = (sessionId) => {
        fetch(`http://localhost:3001/api/recordings/${sessionId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newName: newSessionName }),
        })
        .then(() => {
            fetchSessions();
            setEditingSessionId(null);
        })
        .catch(error => console.error('Error renaming session:', error));
    };

    return (
        <div>
            <div>
                <h2>Saved Sessions</h2>
                <button onClick={fetchSessions} className='btn btn-success btn-action-sm'>Refresh List</button>
                <div className="mb-1 font-monospace small">
                    <ul>
                        {sessions.map(session => (
                            <li key={session.id}>
                                {editingSessionId === session.id ? (
                                    <input
                                    type='text'
                                    value={newSessionName}
                                    onChange={(e) => setNewSessionName(e.target.value)}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            handleSaveRename(session.id);
                                            event.target.blur();
                                        }
                                    }}
                                    />
                                ) : (
                                    <span onClick={() => handleSessionClick(session)} style={{cursor: 'pointer'}}>
                                        {session.name} ({session.data.length} records)
                                    </span>
                                )}
                                {editingSessionId === session.id ? (
                                    <button onClick={() => handleSaveRename(session.id)} className='btn-action-sm'>Save</button>
                                ) : (
                                    <button onClick={() => handleRenameClick(session)} className='btn-action-sm'>Rename</button>
                                )}
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
            </div>
        </div>
    );
}

export default SessionList
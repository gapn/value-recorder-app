import { useState, useEffect, useRef } from 'react'

function RecordControl({ value, isRecording, onToggleRecording, recordedData, setRecordedData }) {
    const [recordInterval, setRecordInterval] = useState(5);
    const [countdown, setCountdown] = useState(5);
    const latestValueRef = useRef(value);

    useEffect(() => {
        latestValueRef.current = value;
    }, [value]);

    useEffect(() => {
        if (!isRecording && recordedData.length > 0) {
            fetch('http://localhost:3001/api/recordings', {
                method: 'POST',
                headers: { 'Content-type': 'application/json', },
                body: JSON.stringify(recordedData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Server response:', data);
                setRecordedData([]);
            })
            .catch((error) => {
                console.log('Error sending recording:', error);
            });
        };
    }, [isRecording, recordedData, setRecordedData]);

    const handleIntervalChange = (event) => {
        const newInterval = parseInt(event.target.value, 10);
        setRecordInterval(newInterval);
        if (!isRecording) {
            setCountdown(newInterval);
        };
    };

    const handleIntervalKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.target.blur();
        }
    };

    useEffect(() => {
        if (!isRecording) {
            setCountdown(recordInterval);
            return;
        };

        const timerId = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown <= 1) {
                    const time = new Date();
                    const day = time.getDate().toString().padStart(2, '0');
                    const month = (time.getMonth() + 1).toString().padStart(2, '0');
                    const year = time.getFullYear().toString();
                    const hour = time.getHours().toString().padStart(2, '0');
                    const minute = time.getMinutes().toString().padStart(2, '0');
                    const second = time.getSeconds().toString().padStart(2, '0');

                    const timestamp = `${day}.${month}.${year} ${hour}:${minute}:${second}`;
                    const logEntry = `${timestamp} ${latestValueRef.current.toFixed(1)}`;

                    setRecordedData(prev => [...prev, logEntry]);

                    return recordInterval;
                } else {
                    return prevCountdown - 1;
                };
            });
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, [isRecording, recordInterval, setRecordedData]);

    return (
        <div>
            <div>
                <button onClick={onToggleRecording}>
                    {isRecording ? 'Stop Recording' : 'Start Recording'}
                </button>
                <input
                    type='number'
                    value={recordInterval}
                    onChange={handleIntervalChange}
                    onKeyDown={handleIntervalKeyDown}
                />
                <p>Next log in: {countdown} seconds.</p>
            </div>
        </div>
    );
}

export default RecordControl
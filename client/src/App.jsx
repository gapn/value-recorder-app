import { useState, useEffect } from 'react'
import './App.css'
import LiveClock from './components/LiveClock.jsx'
import ValueControl from './components/ValueControl.jsx'
import RecordControl from './components/RecordControl.jsx'
import SessionList from './components/SessionList.jsx';


function App() {

  const [value, setValue] = useState(25.0);
  const [isRecording, setIsRecording] = useState(false);
  const [editingSessionId, setEditingSessionId] = useState(null);

  const increaseValue = () => {
    setValue(prevValue => parseFloat((prevValue + 0.1).toFixed(1)));
  };

  const decreaseValue = () => {
    setValue(prevValue => parseFloat((prevValue - 0.1).toFixed(1)));
  };

  const toggleRecording = () => {
    setIsRecording(prevIsRecording => !prevIsRecording);
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      event
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [])

  return (
    <>
      <p>App will be here</p>
      <LiveClock />
      <ValueControl 
        value={value} 
        onIncrease={increaseValue}
        onDecrease={decreaseValue} 
      />
      <RecordControl 
        value={value}
        isRecording={isRecording}
        onToggleRecording={toggleRecording}
      />
      <SessionList 
        editingSessionId={editingSessionId}
        setEditingSessionId={setEditingSessionId}
      />
    </>
  );
}

export default App

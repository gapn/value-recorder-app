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
  const [refreshTrigger, setRefreshTrigger] = useState(0);

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
      if (editingSessionId !== null) {
        return;
      }

      switch (event.key) {
        case 'ArrowUp':
          increaseValue();
          break;
        case 'ArrowDown':
          decreaseValue();
          break;
        case ' ':
          event.preventDefault();
          toggleRecording();
          break;
        case 'r':
          setRefreshTrigger(trigger => trigger + 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [editingSessionId, increaseValue, decreaseValue, toggleRecording]);

  return (
    <>
      <p>App will be here</p>
      <LiveClock />
      <ValueControl 
        value={value}
        setValue={setValue}
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
        refreshTrigger={refreshTrigger}
      />
    </>
  );
}

export default App

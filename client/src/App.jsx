import { useState, useEffect } from 'react'
import './App.css'
import LiveClock from './components/LiveClock.jsx'
import ValueControl from './components/ValueControl.jsx'
import RecordControl from './components/RecordControl.jsx'
import SessionList from './components/SessionList.jsx';
import RecordingLog from './components/RecordingLog.jsx';


function App() {

  const [value, setValue] = useState(25.0);
  const [isRecording, setIsRecording] = useState(false);
  const [editingSessionId, setEditingSessionId] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [recordedData, setRecordedData] = useState([]);

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
    <div>
      <div className='container-fluid d-flex flex-column min-vh-100 py-5'>
        <h1 className='text-center'>Value Recorder</h1>
        <div className='row flex-grow-1 gx-4 mt-3'>
          <div className='col-4'>
            <div className='scrollable-container h-50 '>
              <RecordingLog recordedData={recordedData} />
            </div>
          </div>
          <div className='col-4 d-flex flex-column align-items-center'>
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
              recordedData={recordedData}
              setRecordedData={setRecordedData}
            />
          </div>
          <div className='col-4 d-flex flex-column'>
            <div className='scrollable-container h-50'>
              <SessionList
                editingSessionId={editingSessionId}
                setEditingSessionId={setEditingSessionId}
                refreshTrigger={refreshTrigger}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

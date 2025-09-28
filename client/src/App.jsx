import { useState, useEffect } from 'react'
import './App.css'
import LiveClock from './components/LiveClock.jsx'
import ValueControl from './components/ValueControl.jsx'
import RecordControl from './components/RecordControl.jsx'
import SessionList from './components/SessionList.jsx';


function App() {

  const [value, setValue] = useState(25.0);

  return (
    <>
      <p>App will be here</p>
      <LiveClock />
      <ValueControl value={value} setValue={setValue} />
      <RecordControl value={value} />
      <SessionList />
    </>
  );
}

export default App

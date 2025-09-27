import { useState, useEffect } from 'react'
import './App.css'
import LiveClock from './components/LiveClock.jsx'
import ValueControl from './components/ValueControl.jsx'

function App() {

  return (
    <>
      <p>App will be here</p>
      <LiveClock />
      <ValueControl />
    </>
  );
}

export default App

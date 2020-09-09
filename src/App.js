import React from 'react';
import Frame from './components/Frame'
import './App.css';

function App() {
  return (
    <div style={{width:'100vw', height:'100vh', border:'2px solid blue', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Frame />
    </div>
  );
}

export default App;

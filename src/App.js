import React, { useState } from 'react';
import './App.css';
import ModalComponent from './components/ModalComponent';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <button className = "modalBtn" onClick = {() => setOpenModal(true)}>Modal</button>
      <ModalComponent open = {openModal} onClose = {() => setOpenModal(false)}/>
    </div>
  );
}

export default App;

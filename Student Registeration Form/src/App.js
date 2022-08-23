import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Record from './components/Record';



function App() {
  const [records, setRecords] = useState([]);

  const addRecord = (record)=> {
    setRecords(prev => [...prev, record]);
  }
  return (
    <div className="App">
      <Navbar />
      <div className='heading'>
        <h1>Student Registration Form</h1>
      </div>
      <div className='container'>
        <Form addRecord={addRecord} />
        <Record records={records}/>
      </div>      
    </div>
  );
}

export default App;

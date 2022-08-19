import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [selectedfile,setselectedfile]=useState()
  const [filepicked,setfilepicked]=useState(false)
  const changeHandler=(event) => {
    setselectedfile(event.target.files[0])
    setfilepicked(true)
  }
  const handleUpload= () => {
    const formData=new FormData()
    formData.append('File',selectedfile)
    const handleSubmission = () => {
      const formData = new FormData();
  
      formData.append('File', selectedfile);
  
      fetch(
          'https://freeimage.host/api/1/upload?key=<6d207e02198a847aa98d0a2a901485a5>',
          {
              method: 'POST',
              body: formData,
          }
      )
          .then((response) => response.json())
          .then((result) => {
              console.log('Success:', result);
          })
          .catch((error) => {
              console.error('Error:', error);
          });
  };
  }

  return (
    <div className="App">
      <h1>Document parser</h1>
      <h3>parse a PDF document below</h3>
      <input type='file' name='file' onChange={changeHandler}/> 
      {filepicked ? (
        <div>
          <p>filename: {selectedfile.name}</p>
          <p>filetype: {selectedfile.type}</p>
           </div>
      ):(
        <p>select a file</p>
      )}
      <div>
        <button onClick={handleUpload}>upload file</button>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
  const [shortenedId, setShortenedId] = useState('');

  function onClickHandler() {
    const val = document.querySelector('.url').value;

    fetch('http://localhost:8001/', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: val }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setShortenedId(data.id);
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h2>URL Shortener</h2>
      </div>
      <div className='form'>
        <label>
          URL: <input className='url' name="url" placeholder='Enter your URL...' />
        </label>
        <button className='myButton' onClick={onClickHandler}>Submit</button>
      </div>

      <div className='output-container'>
        {`localhost:8001/${shortenedId}`}
      </div>
    </div>
  );
}

export default App;

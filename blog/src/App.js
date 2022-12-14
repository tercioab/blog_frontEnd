import './App.css';
// import axios from 'axios';
import React, { useState, useEffect } from 'react';

// import React, { useState, useEffect } from 'react';

function App() {
  const [music, setMusic] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://localhost:3000/music');
      const data = await result.json();
      setMusic(data);
    };
    fetchData();
  }, []);
  return (

    <div>
      <h1>music</h1>
      <div>{!music && 'carregando'}</div>
      <div>
        {music?.map(({ title, artist }, i) => (
          <div key={ i }>
            <h1>{title}</h1>
            <p>{artist }</p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;

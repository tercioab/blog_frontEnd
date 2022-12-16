import './App.css';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';

function App() {
  const content = [
    { id: 1, text: '<h1> teste </h1> <h2>2ij</h2>' },
    { id: 2, text: '<h1> teste2 </h1>' },
    { id: 2, text: '<h1> teste3 </h1>' },
  ];
  return (

    <div>
      <h1>teste</h1>
      {content
        .map(({ text }) => (ReactHtmlParser(text)
        ))}
    </div>

  );
}

export default App;

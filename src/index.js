import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './Hello';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <Hello />
    </div>
  </React.StrictMode>
);

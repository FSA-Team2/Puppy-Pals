//main.jsx is the entry point for the application. It renders the App component into the root element of the HTML document.

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';


function createRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(createRoutes(), document.getElementById('root'))


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './index.css';
import App from './App';
import CountryDetails from './CountryDetails';
import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        {''}
        <Route path="/" element={<Main />}>
          {''}
        </Route>
        <Route path="CountryDetails/:id" element={<CountryDetails />}>
          {''}
        </Route>
      </Route>
    </Routes>
  </Router>
);



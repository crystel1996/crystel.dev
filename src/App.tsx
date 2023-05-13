import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CssBaseline } from '@mui/material';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;

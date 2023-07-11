import React from 'react';
import logo from './logo.svg';
import AccessibleTable from './components/TestCasesTable';
import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
        <AccessibleTable />
        <Button data-cy="button1">Button 1</Button>
        <Button data-cy="button2">Button 2</Button>
        <Button data-cy="button3">Button 3</Button>
    </div>
  );
}

export default App;

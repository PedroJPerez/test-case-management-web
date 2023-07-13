import React from 'react';
import TestCasesTable from './components/TestCasesTable';
import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
        <TestCasesTable />
        <Button data-cy="button1">Button 1</Button>
        <Button data-cy="button2">Button 2</Button>
        <Button data-cy="button3">Button 3</Button>
    </div>
  );
}

export default App;

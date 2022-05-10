import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Table } from './components/Table/Table';

function App() {
  return (
    <div className="app">
      <Header />
      <Table />
    </div>
  );
}

export default App;

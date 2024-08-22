import './App.css';
import React from 'react';
import UserData from './UserData';

const App: React.FC = () => {
  return (
    <div>
      <h1>My App</h1>
      <UserData userId="1" />
    </div>
  );
};


export default App;

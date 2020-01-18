import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MemberList from './components/MemberList';
import MemberForm from './components/MemberForm';

const defaulMember = {
  id: 1,
  name: 'Dan Joe',
  email: 'dan.joe@example.com',
  role: 'Foo'
}

function App() {

  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="App">
    </div>
  );
}

export default App;

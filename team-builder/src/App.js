import React, { useState } from 'react';
import './App.css';
import MemberList from './components/MemberList';
import MemberForm from './components/MemberForm';
import { Container } from './components/Utils';

const defaulMember = {
  id: 1,
  name: 'Dan Joe',
  email: 'dan.joe@example.com',
  role: 'Foo'
}

function App() {

  const [teamMembers, setTeamMembers] = useState([ defaulMember]);

  const addMember = newMember => {
    const uuidv4 = require('uuid/v4');
    newMember = {
      ...newMember,
      id: uuidv4(),
    }
    setTeamMembers([
      ...teamMembers,
      newMember,
    ])
  }

  return (
    <Container ___class="app">
      <MemberForm addMember={addMember} />
      <MemberList members={teamMembers} />
    </Container>
  );
}

export default App;

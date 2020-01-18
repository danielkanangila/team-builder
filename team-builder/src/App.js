import React, { useState } from 'react';
import logo from './logo.svg';
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

  return (
    <Container>
      <MemberList members={teamMembers} />
    </Container>
  );
}

export default App;

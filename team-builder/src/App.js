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
  const [memberToEdit, setMemberToEdit] = useState({name: '', email: '', role: ''});
  const [isEditing, setIsEditing] = useState(false);

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

  const editMember = memberId => {
      let member  = teamMembers.find(member => member.id === memberId);
      setMemberToEdit(member);
      setIsEditing(true);
  }

  const save = editedMember => {
    let member = teamMembers.filter(member => member.id !== editedMember.id);
    setTeamMembers([
      ...member,
      editedMember
    ])
    setIsEditing(false)
  }

  return (
    <Container ___class="app">
      <MemberForm 
        isEditing={isEditing} 
        memberToEdit={memberToEdit} 
        addMember={addMember}
        save={save} />
      <MemberList onEdit={editMember} members={teamMembers} />
    </Container>
  );
}

export default App;

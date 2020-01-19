import React, { useState } from 'react';
import './App.css';
import MemberList from './components/MemberList';
import MemberForm from './components/MemberForm';
import { Container } from './components/Utils';
import AppBar from './components/AppBar';
import Footer from './components/Footer';

const defaultMember = {
  id: 1,
  name: 'Dan Joe',
  email: 'dan.joe@example.com',
  role: 'Foo'
}

function App() {

  const [teamMembers, setTeamMembers] = useState([ defaultMember]);
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
    let members = teamMembers.filter(member => member.id !== editedMember.id);
    setTeamMembers([
      ...members,
      editedMember
    ])
    setIsEditing(false)
  }

  const deleteMember = memberId => {
    let members = teamMembers.filter(member => member.id !== memberId);
    setTeamMembers([...members]);
  }

  return (
    <div>
      <AppBar />
      <Container ___class="app">
        <MemberForm 
          isEditing={isEditing} 
          memberToEdit={memberToEdit} 
          addMember={addMember}
          save={save} />
        <MemberList 
          onDelete={deleteMember}
          onEdit={editMember} 
          members={teamMembers} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

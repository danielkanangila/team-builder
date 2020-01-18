import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { 
    TextField, 
    Label, 
    TextFieldWrapper, 
    Button,
    Icon,
    ClearFix
} from './Utils';

const Form = styled.form`
    @media (min-width: 875px) {
        width: 45%;
    }
`

const memberDefaultValue = {
    name: '',
    email: '',
    role: ''
}

const MemberForm = props => {

    const [member, setMember] = useState({name: '', email: '', role: ''});
    const { memberToEdit, isEditing } = props;

    const handleChange = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (!isEditing) {
            props.addMember(member);
        } else {
            props.save(member);
        }
        setMember(memberDefaultValue);
    }

    useEffect(() => {
        setMember(memberToEdit)
    }, [memberToEdit])

    return(
        <Form onSubmit={handleSubmit}>
            <TextFieldWrapper>
                <Label htmlFor="name">Name</Label>
                <TextField 
                    onChange={handleChange} 
                    placeholder="Dan Joe" 
                    name="name"
                    value={member.name} 
                    type="text" />
            </TextFieldWrapper>
            <TextFieldWrapper>
                <Label htmlFor="email">Email</Label>
                <TextField 
                    onChange={handleChange} 
                    placeholder="dan.joe@example.com" 
                    name="email" 
                    value={member.email} 
                    type="email" />
            </TextFieldWrapper>
            <TextFieldWrapper>
                <Label htmlFor="role">Role</Label>
                <TextField 
                    onChange={handleChange} 
                    name="role"
                    value={member.role}  
                    placeholder="ex: admin" 
                    type="text" />
            </TextFieldWrapper>
            <ClearFix />
            <Button type="primary" role="submit">
                <Icon className={props.isEditing ? 'fas fa-save' : 'fas fa-user-plus'}></Icon>
                {props.isEditing ? 'Save' : 'Add Member'}
            </Button>
        </Form>
    )
}

export default MemberForm;
import React, {useState} from 'react';
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

const MemberForm = props => {

    const [member, setMember] = useState({name: '', email: '', role: ''});

    const handleChange = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return(
        <Form onSubmit={handleSubmit}>
            <TextFieldWrapper>
                <Label htmlFor="name">Name</Label>
                <TextField onChange={handleChange} placeholder="Dan Joe" name="name" type="text" />
            </TextFieldWrapper>
            <TextFieldWrapper>
                <Label htmlFor="email">Email</Label>
                <TextField onChange={handleChange} placeholder="dan.joe@example.com" name="email" type="email" />
            </TextFieldWrapper>
            <TextFieldWrapper>
                <Label htmlFor="role">Role</Label>
                <TextField onChange={handleChange} name="role" placeholder="ex: admin" type="text" />
            </TextFieldWrapper>
            <ClearFix />
            <Button type="primary" role="submit">
                <Icon className="fas fa-user-plus"></Icon>
                Add Member
            </Button>
        </Form>
    )
}

export default MemberForm;
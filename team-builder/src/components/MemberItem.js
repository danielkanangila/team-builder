import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`

`;

const P = styled.p``;

const EditButton = styled.button``; 

const DeleteButton = styled.button``; 


const MemberItem = ({member}) => {
    const { name, email, role, id } = member;
    return(
        <ListItem id={id}>
            <P>Name: {name}</P>
            <P>Email: {email}</P>
            <P>Role: {role}</P>
            <EditButton>
                <i className="fas fa-edit"></i>
            </EditButton>
            <DeleteButton>
                <i className="far fa-trash-alt"></i>
            </DeleteButton>
        </ListItem>
    );
}

export default MemberItem;
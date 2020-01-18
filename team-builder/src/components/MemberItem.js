import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`

`;

const P = styled.p``;

const EditButton = styled.button``; 

const DeleteButton = styled.button``; 


const MemberItem = ({member, handleClick}) => {
    const { name, email, role, id } = member;
    return(
        <ListItem id={id} onClick={handleClick}>
            <P>Name: {name}</P>
            <P>Email: {email}</P>
            <P>Role: {role}</P>
            <EditButton>
                <i className="typcn-edit"></i>
            </EditButton>
            <DeleteButton>
                <i className="typcn-trash"></i>
            </DeleteButton>
        </ListItem>
    );
}

export default MemberItem;
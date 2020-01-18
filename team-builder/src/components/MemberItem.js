import React from 'react';
import styled from 'styled-components';
import { Button, ClearFix, Icon } from './Utils';

const ListItem = styled.li`
    padding: 16px 0;
    border-bottom: 1px solid #ddd;
`;

const P = styled.p`
    line-height: 1.25;
`;

const EditButton = styled.button`
    padding: 10px 15px;
    border: 1px solid rgba(0,0,0,0.4);
    color: rgba(0,0,0,0.4);
    border-radius: 5px 0px 0 5px;
    border-right: none;
    transition: all .3s;
    text-transform: uppercase;
    :hover {
        background: #ccc;
        color: #000;
    }
`; 

const DeleteButton = styled.button`
    padding: 10px 15px;
    border: 1px solid red;
    border-radius: 0px 5px 5px 0px;
    background: red;
    color: #fff;
    text-transform: uppercase;
    :hover {
        background: #ccc;
        color: #000;
    }
`; 


const MemberItem = ({member}) => {
    const { name, email, role, id } = member;
    return(
        <ListItem id={id}>
            <P>Name: {name}</P>
            <P>Email: {email}</P>
            <P>Role: {role}</P>
            <ClearFix></ClearFix>
            <Button type="edit">
                <Icon className="fas fa-edit"></Icon>
                Edit
            </Button>
            <Button type="danger">
                <Icon className="far fa-trash-alt"></Icon>
                Delete
            </Button>
        </ListItem>
    );
}

export default MemberItem;
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
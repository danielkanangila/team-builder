import React from 'react';
import styled from 'styled-components';
import MemberItem from './MemberItem';

const List = styled.ul`
    list-style: none;
    margin-left: -40px;
    @media (min-width: 875px) {
        width: 45%;
    }
`

const ListTitle = styled.h2`
    text-transform: uppercase;
    font-size: 1.8rem;
    
    @media (min-width: 875px) {
        margin-top: 0;
        margin-bottom: 15px;
    }
`;

const MemberList  = ({members, onEdit, onDelete}) => {
    return(
        <List>
            <ListTitle>Team Members</ListTitle>
            {members?.map(member => <MemberItem 
                onEdit={onEdit}
                onDelete={onDelete} 
                key={member.id} 
                member={member} />)}
        </List>
    )
}

export default MemberList;
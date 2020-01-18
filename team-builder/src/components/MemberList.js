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
const MemberList  = ({members}) => {
    return(
        <List>
            {members?.map(member => <MemberItem key={member.id} member={member} />)}
        </List>
    )
}

export default MemberList;
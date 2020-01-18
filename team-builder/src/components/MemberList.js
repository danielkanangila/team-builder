import React from 'react';
import styled from 'styled-components';
import MemberItem from './MemberItem';

const List = styled.ul`
    list-style: none;
`
const MemberList  = ({members}) => {
    return(
        <List>
            {members?.map(member => <MemberItem key={member.id} member={member} />)}
        </List>
    )
}

export default MemberList;
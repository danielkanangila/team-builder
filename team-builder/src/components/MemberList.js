import React from 'react';
import styled from 'styled-components';
import MemberItem from './MemberItem';

const List = styled.ul`

`
const MemberList  = ({members}) => {
    return(
        <List>
            {members?.map(member => <MemberItem member={member} />)}
        </List>
    )
}

export default MemberList;
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #ccc;
`

const Logo  = styled.h1`
    font-family: 'Fredoka One', cursive;
`

const MenuIcon = styled.div`

`

const UserDiv = styled.div`

`

const AppBar = () => {
    return(
        <Wrapper>
            <MenuIcon>
                <i className="fas fa-bars"></i>
                Menu
            </MenuIcon>
            <Logo>
                AdminPanel 
            </Logo>
            <UserDiv>
                <i className="fas fa-user-circle"></i>
            </UserDiv>
        </Wrapper>
    )
}

export default AppBar;
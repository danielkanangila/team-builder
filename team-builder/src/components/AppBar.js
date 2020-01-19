import React from 'react';
import styled from 'styled-components';
import { Container } from './Utils';

const Wrapper = styled.div`
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid #ccc;
    margin-bottom: 15px;
`

const Logo  = styled.h1`
    margin: 0;
    font-family: 'Fredoka One', cursive;
    font-size: 1.8rem;
`

const MenuItemIcon = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

const MenuText = styled.span`
    font-size: 0.55rem;
    text-transform: uppercase;
`

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        fontSize: '1.7rem'
    }
}

const AppBar = () => {
    const classes = styles;
    return(
        <Wrapper>
            <Container style={classes.container}>
                <MenuItemIcon>
                    <i style={classes.icon} className="fas fa-bars"></i>
                    <MenuText>
                        Menu
                    </MenuText>
                </MenuItemIcon>
                <Logo>
                    AdminPanel 
                </Logo>
                <MenuItemIcon>
                    <i className="fas fa-user-circle"></i>
                    <MenuText>
                        Me
                    </MenuText>
                </MenuItemIcon>
            </Container>
        </Wrapper>
    )
}

export default AppBar;
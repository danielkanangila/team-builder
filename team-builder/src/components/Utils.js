import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`;

export const Button = styled.button`
    padding: 10px 15px;
    transition: all .3s;
    text-transform: uppercase;
    font-size: 10px;

    ${props => (props.type === 'danger' ? 
        `background-color: red;
         border-radius: 0 5px 5px 0;
         border: 1px solid red;
         color: white;
         :hover {
             background-color: rgba(255,0,0,0.7)
         }
        `
        : null
    )}
    ${props => (props.type === 'edit' ?
        `border-radius: 5px 0px 0 5px;
         border: 1px solid rgba(0,0,0,0.4);
         border-right: none;
         color: rgba(0,0,0,0.4);
         :hover {
            background: #ccc;
            color: #000;
        }
        `
        : null
    )}
`;

export const ClearFix = styled.div`
    padding: 5px 0;
`;

export const Icon = styled.i`
    margin-right: 5px;
`
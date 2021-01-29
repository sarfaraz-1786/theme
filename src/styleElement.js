import styled from "styled-components";

export const Para = styled.nav`
    background-color: ${(props) => (props.change ? "red" : "white")};
    height: 95vh;
    display: flex;
    justify-content: center;
    color:  ${(props) => (props.change ? "white" : "red")};
`;

export const Themebutton = styled.button`
    color: ${(props) => (props.change ? "white" : "red")};
    background-color: ${(props) => (props.change ? "red" : "white")};
    border-radius: 20px;
    font-style: italic;
    outline-style:none;
    &:hover {
        font-size: .9rem;
    }
`;

export const Themediv = styled.div`
    height:95vh;
    color: ${(props) => (props.change ? "white" : "red")};
    background-color: ${(props) => (props.change ? "red" : "white")};
    transform:translateX(5rem);
    width:red;
`

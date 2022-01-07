import styled from 'styled-components';

export const Logo = styled.img`
    width: 150px;
    height: 150px;
    margin: 2rem auto;
`;

export const SearchTitle = styled.span`
    font-size: 1rem;
    font-weight: 600;
`;

export const SearchBox = styled.form`
    border: 1px solid black;
    margin: 1.25rem auto;
    & input {
        border: none;
        outline: none;
        font-size: 1rem;
        font-weight: 600;
        padding: 0.5rem;
    }
    & button {
        cursor: pointer;
        border: none;
        outline: none;
        font-size: 1rem;
        padding: 0.5rem;
        color: #fff;
        background-color: #000;
    }
`;
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Poppins:wght@400;600&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Poppins', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height 100vh;
      background: linear-gradient(#3284FF, #fff);
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 2rem 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 #808080;
  background: #fff;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: 600;
  & a {
    text-decoration: none;
    color: black;
  }
`;

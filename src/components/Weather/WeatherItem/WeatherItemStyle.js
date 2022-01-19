import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
`;

export const DetailsIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  & span {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;
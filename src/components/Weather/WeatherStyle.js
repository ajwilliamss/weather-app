import styled from 'styled-components';

export const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Temperature = styled.span`
  font-size: 1.25rem;
  margin: 2rem auto;
  text-transform: capitalize;
`;

export const WeatherImage = styled.img`
  width: 125px;
  height: 125px;
  margin: 2rem;
`;

export const City = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const WeatherDetails = styled.span`
  font-size: 1rem;
  margin: 1rem;
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
import { DetailsContainer, DetailsIcon, Details } from "./WeatherItemStyle";

const WeatherIcon = {
  sunset: "assets/sun-outline.svg",
  sunrise: "assets/sun-outline.svg",
  wind: "assets/wind.svg",
  humidity: "assets/humidity.svg",
  pressure: "assets/pressure.svg",
};

const WeatherItem = ({ condition, value }) => {
  return (
    <DetailsContainer>
      <DetailsIcon src={WeatherIcon[condition]} alt="Weather" />
      <Details>
        <span>{value}</span>
        <span>{condition}</span>
      </Details>
    </DetailsContainer>
  );
};

export default WeatherItem;

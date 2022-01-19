import { WeatherInfo, Temperature, WeatherImage, City, WeatherDetails, WeatherContainer } from './WeatherStyle';
import WeatherItem from './WeatherItem/WeatherItem';

const WeatherIcons = {
  '01d': 'assets/sun.svg',
  '01n': 'assets/night.svg',
  '02d': 'assets/day.svg',
  '02n': 'assets/cloudy-night.svg',
  '03d': 'assets/rain.svg',
  '03n': 'assets/rain.svg',
  '04d': 'assets/day.svg',
  '04n': 'assets/cloudy-night.svg',
  '09d': 'assets/clouds.svg',
  '09n': 'assets/rain-night.svg',
  '10d': 'assets/clouds.svg',
  '10n': 'assets/rain-night.svg',
  '11d': 'assets/storm.svg',
  '11n': 'assets/storm.svg',
};

const Weather = ({ weather }) => {
  const isDay = weather?.weather[0].icon?.includes('d');

  const getTime = (time) => {
    return `${new Date(time * 1000).getHours()}:${new Date(time * 1000).getMinutes()}`;
  };

  return (
    <>
      <WeatherInfo>
        <Temperature>{`${Math.floor(weather?.main?.temp - 273)}°C - ${weather?.weather[0].description}`}</Temperature>
        <WeatherImage src={WeatherIcons[weather?.weather[0].icon]} alt='Weather' />
      </WeatherInfo>
      <City>{`${weather?.name}, ${weather?.sys?.country}`}</City>
      <WeatherDetails>Weather Details:</WeatherDetails>
      <WeatherContainer>
        <WeatherItem condition={isDay ? 'sunset' : 'sunrise'} value={`${getTime(weather?.sys[isDay ? 'sunset' : 'sunrise'])}`} />
        <WeatherItem condition='wind' value={weather?.wind?.speed} />
        <WeatherItem condition='humidity' value={weather?.main?.humidity} />
        <WeatherItem condition='pressure' value={weather?.main?.pressure} />
      </WeatherContainer>
    </>
  );
};

export default Weather;
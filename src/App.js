import { useState } from 'react';
import { GlobalStyle, Container, Title } from './AppStyle';
import Search from './components/Search/Search';
import Weather from './components/Weather/Weather';
import axios from 'axios';

const API_KEY = '5b43738a97eb5af0e3791cca7a6f14c3';

function App() {
  const [input, setInput] = useState(null);
  const [data, setData] = useState(null);

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`;

  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(URL);
      // console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <GlobalStyle />
      <Title>Weather App</Title>
      {data ? <Weather weather={data} /> : <Search updateInput={setInput} getWeather={fetchWeather} />}
    </Container>
  );
}

export default App;

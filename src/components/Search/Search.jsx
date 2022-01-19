import { Logo, SearchTitle, SearchBox } from './SearchStyle';

const Search = ({ updateInput, getWeather }) => {
  return (
    <>
      <Logo src='assets/day.svg' alt='Day' />
      <SearchTitle>Enter City Name:</SearchTitle>
      <SearchBox onSubmit={getWeather}>
        <input type='text' placeholder='Cape Town' onChange={(e) => updateInput(e.target.value)} />
        <button type='submit'>Search</button>
      </SearchBox>
    </>
  );
};

export default Search;
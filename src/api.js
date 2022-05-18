// Base URL
const base_url = 'https://api.rawg.io/api';

// getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

getCurrentMonth();

// Popular games
const popular_games = 'https://api.rawg.io/api/games?dates=';
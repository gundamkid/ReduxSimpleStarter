import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyALP5xtDcI1ovwmVJvNz7FonM7G-hNU42c';

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));

import React from 'react';
import {Provider} from 'react-redux';
import MoviesList from './screens/movies';
import {store} from './store';

function App() {
  return (
    <Provider store={store}>
      <MoviesList />
    </Provider>
  );
}

export default App;

import React from 'react';
import Route from '../Route/Route';
import GlobalStyles from './GlobalStyles';

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Route />
      </>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import ImageGrid from './components/ImageGrid/ImageGrid';

import configureStore from './redux/store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <ImageGrid />
        </Fragment>
      </Provider>
    );
  }
}

export default App;

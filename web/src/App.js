import React, { Component } from 'react';
import './App.css';

// Dialogs and Loaders
import Alert from './components/dialogs/Alert';
import LinearProgressLoader from './components/loaders/LinearProgressLoader';

// Layouts
import LoadedLayout from './components/layout/LoadedLayout';
import LoadingLayout from './components/layout/LoadingLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Alert />
        <LinearProgressLoader />
        <LoadedLayout />
        <LoadingLayout />
      </div>
    );
  }
}

export default App;
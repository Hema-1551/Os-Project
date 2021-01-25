import './css/App.css';
import './css/home.css';

import Application from './Components/Application';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Application />
        </div>
    );
  }

}

export default App;

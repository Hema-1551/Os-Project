import './css/App.css';
import './css/home.css';

import Application from './Components/Application';
import { Component } from 'react';
import UserProvider from './providers/UserProvider';

class App extends Component {
  render() {
    return ( 
        <UserProvider>
        <Application />
        </UserProvider>
    );
  }

}

export default App;

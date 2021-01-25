import logo from './logo.svg';
import './App.css';
import './home.css';
import Search from './Components/Search';
import Header from './Components/Header';


import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <div class="toAndfrom">
            
          </div>


          {/* /* <!-- Custom rounded search bars with input group --> */}
          <form action="">
            <Search placeholder="From Location" />
            <Search placeholder="To Location" />



          </form>
          {/* <!-- End --> */}
        </section>
      </div>
    );
  }

}

export default App;

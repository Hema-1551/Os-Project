import React,{createContext, Component} from 'react';
import auth from '../firebase/fire';

export const UserContext = createContext({user: null});

class UserProvider extends Component {

    state = { 
      user: null
    };
    componentDidMount = () => {
        
    }
}
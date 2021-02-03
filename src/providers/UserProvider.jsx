import React,{createContext, Component} from 'react';
import { auth, getUser } from '../firebase/fire';

export const UserContext = createContext({user: null});

class UserProvider extends Component {

    state = { 
      user: null
    };
    componentDidMount = async () => {
        auth.onAuthStateChanged(async userAuth => {
              const user = await getUser(userAuth);
              this.setState({user})
        });
    };
   
     render(){
       console.log(this.state.user,"from userprovider")
       return(
        <UserContext.Provider value={this.state.user}>
          {this.props.children}
        </UserContext.Provider>
       );
     }
}

export default UserProvider;
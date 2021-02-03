import Logo from './Logo';
import {Link } from '@reach/router'
import React , { useContext } from 'react';
import { UserContext } from '../providers/UserProvider'
import {signOut} from '../firebase/fire'

const Header=(props)=>{

    const user = useContext(UserContext);
    console.log(user);
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="">
              <Logo />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                  <Link to="/">
                  <li className={"nav-item " +props.home} >
                    <label className="nav-link" >Home <span className="sr-only">(current)</span></label>
                  </li>
                  </Link>
                 {
                   (user) &&
                   <li className="nav-item">
                   <label className="nav-link">My Bookings</label>
                   </li>
                 }
                  <li className="nav-item">
                    <label className="nav-link" >Help</label>
                  </li>
                  {
                    !user &&
                    <Link to="/SignIn" >
                  <li className={"nav-item " +props.signin}>
                    <label className="nav-link" >Login</label>
                  </li>
                  </Link>
                  }
                      {
                        (!user) &&
                        <Link to="/SignUp" >
                         <li className={"nav-item " +props.signup}>
                        <label className="nav-link" >Signup</label>
                         </li>
                         </Link>
                     }
                  {
                    (user) &&
                    <li className="nav-item ">
                    <label className="nav-link" >{ (user.data) && user.data.displayName}</label>
                    </li>
                  }
                  {
                    (user) &&
                    <li className="nav-item" onClick={signOut}>
                    <label className="nav-link" >Logout</label>
                     </li>
                  }
                  
                </ul>
                <div></div>
              </div>
            </nav>
          </div>

    );

}

export default Header;
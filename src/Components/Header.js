import Logo from './Logo';
import {Link } from '@reach/router'

const Header=(props)=>{

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
                  <li className="nav-item">
                    <label className="nav-link">My Bookings</label>
                  </li>
                  <li className="nav-item">
                    <label className="nav-link" >Help</label>
                  </li>
                  <li className="nav-item">
                    <label className="nav-link" >My Account</label>
                  </li>
                  <Link to="/SignIn" >
                  <li className={"nav-item " +props.signin}>
                    <label className="nav-link" >Login</label>
                  </li>
                  </Link>
                  <Link to="/SignUp" >
                  <li className={"nav-item " +props.signup}>
                    <label className="nav-link" >Signup</label>
                  </li>
                  </Link>
                </ul>
                <div></div>
              </div>
            </nav>
          </div>

    );

}

export default Header;
import Logo from './Logo';

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
                  <li className="nav-item active">
                    <a className="nav-link" href=""
                    >Home <span className="sr-only">(current)</span></a
                    >
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">My Bookings</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Help</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">My Account</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Signup</a>
                  </li>
                </ul>
                <div></div>
              </div>
            </nav>
          </div>

    );

}

export default Header;
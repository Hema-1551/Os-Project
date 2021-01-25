import react from 'react';
import Logo from './Logo';

const Header=(props)=>{
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="#">
              <Logo/>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#"
                    >Home <span class="sr-only">(current)</span></a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">My Bookings</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Help</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">My Account</a>
                  </li>
                </ul>
                <div></div>
              </div>
            </nav>
          </div>

    );

}

export default Header;
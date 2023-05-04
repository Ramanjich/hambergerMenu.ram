import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
        alt="website logo"
        className="web-logo"
      />
    </Link>
    <div className="pop-up-container">
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="button-style"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <div className="show-popup">
            <button
              type="button"
              className="close-btn"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
            <ul className="h-a-container">
              <Link to="/">
                <li className="home">
                  <AiFillHome className="popup-home-icon" />
                  <p className="popup-home">Home</p>
                </li>
              </Link>
              <Link to="/about">
                <li className="about">
                  <BsInfoCircleFill className="popup-info-icon" />
                  <p className="popup-about">About</p>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header

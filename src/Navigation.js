import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignCenter, faHospitalUser} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {

  return (
    <div>
      
    <nav className="navbar fixed-bottom bg-light  d-block  bottom-tab-nav" role="navigation">
      <Nav className="w-100">
        <div className=" d-flex flex-row justify-content-around w-100">
        <Nav className="ml-auto">
              <NavItem>
              
                <NavLink to="/lists" className="nav-link">
                <FontAwesomeIcon icon={faAlignCenter}></FontAwesomeIcon> Lists
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/account" className="nav-link">
                <FontAwesomeIcon icon={faHospitalUser}></FontAwesomeIcon> Account
                </NavLink>
              </NavItem>
            </Nav>
        </div>
      </Nav>
    </nav>
    </div>
  )
};

export default Navigation;
import React from 'react'
import './header.css'
import {Container, Row, Button } from 'reactstrap'
import {NavLink, Link } from 'react-router-dom'
import {MdMenu} from 'react-icons/md'

import LOGO from '../../assets/images/logo.png'

const nav__link = [
  {
    path:'/home',
    display: 'Home'
  },
  {
    path:'/about',
    display: 'About'
  },
  {
    path:'/tours',
    display: 'Tours'
  }
]

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper">
          <div className="logo">
            <img src={LOGO} alt="Logo" />
          </div>

          <div className="navigation">
            <ul className="menu">
              {
                nav__link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path}
                      className={navClass => navClass.isActive ? "active__link" : ''}
                    >{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="nav__right">
            <div className="nav__btn">
              <button className='btn secondary__btn'>
                <Link to='login'>Login</Link>
              </button>
              <button className='btn primary__btn'>
              <Link to='register'>Register</Link>
              </button>
            </div>

            <span className="mobile__menu">
              <MdMenu/>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
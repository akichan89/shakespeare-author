import React from 'react';
import { push as Menu } from 'react-burger-menu';
import './sidebar.scss';
import Header from './header.js';
import Books from './components/books';

export default props => {
  return (
      <div className="headerLinksWrapper">
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/books">
        Books
      </a>
      <a className="menu-item" href="/bookstore">
        Bookstore
      </a>
      <a className="menu-item" href="/bio">
        Bio
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
    </div>
  );
};
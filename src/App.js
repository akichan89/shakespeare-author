import React from 'react';
import Sidebar from './sidebar';
import './App.scss';
import Header from './header.js'
import SocialLinks from './components/social.js';
import Books from './components/books.js';
import bg from './bg2.jpg';
import CarouselComponent from './components/caoursel.js';

function App() {
  return (
    <div className="mainWrapper">
      <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap"></div>
      </div>
      <div className="headerWrapper" style={{ backgroundImage: `url(${bg})`, backgroundSize: '65%', backgroundRepeat: 'no-repeat'}}>
      <div className="wrapper">
          <h1>Shakespeare</h1>
      </div>
      <div className="iconWrapper">
        <SocialLinks />
      </div>
      </div>
      <Books />
      <div className="booksShuffle">
      
      <CarouselComponent />
      </div>
    </div>
  );
}

export default App;
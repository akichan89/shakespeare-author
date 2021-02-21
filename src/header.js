import React, {useState, useRef} from 'react';
import { Route, Switch } from 'react-router-dom';
import Books from './components/books.js';
import Bio from './components/bio.js';
import Bookstore from './components/bookstore.js';
import Contact from './components/contact.js';
import Sidebar from './sidebar.js';
import SocialLinks from './components/social.js';


function Header() {
    
      
    let routes = (
        <Switch>
          <Route exact path="/">
            
          </Route>
          <Route path="/bio">
            <Bio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="bookstore">
              <Bookstore />
          </Route>
        </Switch>
      );
        
    
    return(
        <div>
            
                <SocialLinks />
            
        </div>
    );
    
};
export default Header();
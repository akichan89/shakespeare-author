// // Menu.js
// import React from 'react';

// export default function MenuScreen() {

// const Menu = ({ open }) => {
//   var navbar = document.querySelector(".navbar")
//   var ham = document.querySelector(".ham")
  
//   // toggles hamburger menu in and out when clicking on the hamburger
//   function toggleHamburger(){
//     navbar.classList.toggle("showNav")
//     ham.classList.toggle("showClose")
//   }
  
//   ham.addEventListener("click", toggleHamburger)
  
//   // toggle when clicking on links
  
//   // METHOD 1
//   var menuLinks = document.querySelectorAll(".menuLink")
//   menuLinks.forEach( 
//     function(menuLink) { 
//       menuLink.addEventListener("click", toggleHamburger) 
//     }
//   )

//   return (
//     <div>
//     <button class="ham"></button>
//             <nav class="navbar">
//                 <ul>
//                 <li><a class="menuLink" href="#">Home</a></li>
//                 <li><a class="menuLink" href="#">Books</a></li>
//                 <li><a class="menuLink" href="#">Bookstore</a></li>
//                 <li><a class="menuLink" href="#">Bio</a></li>
//                 <li><a class="menuLink" href="#">Contacts</a></li>
//                 </ul>
//             </nav>
//       </div>
//   )
// }

// }



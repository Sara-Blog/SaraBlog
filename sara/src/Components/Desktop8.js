import React from 'react';
import './Desktop8.css';
import book1 from '../public/crazy/book1.jpg';
import book2 from '../public/crazy/book2.jpg';
import book3 from '../public/crazy/book3.jpg';
import book4 from '../public/crazy/book4.jpg';
import book5 from '../public/crazy/book5.jpg';
import book6 from '../public/crazy/book6.jpeg';
import book7 from '../public/crazy/book7.jpeg';
import book8 from '../public/crazy/book8.jpeg';
import SideNavBar from './sidebar';
export default function Desktop8 () {
	return (
		<div class="desktop-4-QW4">
			<SideNavBar/>
			<div class="auto-group-mdzz-6tg">
		  		<p class="explore-a-whole-new-world-of-books-through-my-blog-Ezt">Explore a whole new world of Books through my blog </p>
		  		<p class="saras-blog-6nC">SARA’S BLOG </p>
			</div>
			

			<div class="auto-group-5kr8-raL">
		
		  <p class="black-waters">
		  <a href="https://www.google.co.in/books/edition/One_Thousand_Stars_and_You/wZ1NDwAAQBAJ?hl=en&gbpv=0" ><img  src={book1} alt='hey' class="crazy1"></img></a>
					<a href="https://www.google.co.in/books/edition/The_Midnight_Library/1shDzQEACAAJ?hl=en"><img  src={book2} alt='hey' class="crazy2"></img></a>
					<a href="https://www.google.co.in/books/edition/The_Little_Paris_Bookshop/DfNGBQAAQBAJ?hl=en&gbpv=0"><img  src={book3} alt='hey' class="crazy3"></img></a>
					<a href="https://www.google.co.in/books/edition/The_Switch/nqKODwAAQBAJ?hl=en&gbpv=0"><img  src={book4} alt='hey' class="crazy4"></img></a>
					<a href="https://www.google.co.in/books/edition/The_Flatshare/wr9dDwAAQBAJ?hl=en&gbpv=0"><img  src={book5} alt='hey' class="crazy5"></img></a>
					<a href="https://www.google.co.in/books/edition/The_Keeper_of_Lost_Things/-Rs5tAEACAAJ?hl=en"><img  src={book6} alt='hey' class="crazy6"></img></a>
					<a href="https://www.google.co.in/books/edition/The_Rosie_Project/NJkLnwEACAAJ?hl=en"><img  src={book7} alt='hey' class="crazy7"></img></a>
					<a href="https://www.google.co.in/books/edition/The_World_at_My_Feet/asLTDwAAQBAJ?hl=en&gbpv=0"><img  src={book8} alt='hey' class="crazy8"></img></a>
		  </p>
			</div>
	  	</div>
	  
	)
}
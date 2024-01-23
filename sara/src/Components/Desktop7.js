import React from 'react';
import './Desktop7.css';
import book1 from '../public/happy/book1.jpg';
import book2 from '../public/happy/book2.jpg';
import book3 from '../public/happy/book3.jpg';
import book4 from '../public/happy/book4.jpg';
import book5 from '../public/happy/book5.jpg';
import book6 from '../public/happy/book6.jpg';
import book7 from '../public/happy/book7.jpg';
import book8 from '../public/happy/book8.jpeg';
import SideNavBar from './sidebar';
export default function Desktop7 () {
	return (
		<div class="desktop-4-QW4">
			<SideNavBar/>
			<div class="auto-group-mdzz-6tg">
		  		<p class="explore-a-whole-new-world-of-books-through-my-blog-Ezt">Explore a whole new world of Books through my blog </p>
		  		<p class="saras-blog-6nC">SARA’S BLOG </p>
			</div>
			

			<div class="auto-group-5kr8-raL">
		
		  <p class="black-waters">
		  <a href="https://www.google.co.in/books/edition/One_Thousand_Stars_and_You/wZ1NDwAAQBAJ?hl=en&gbpv=0" ><img  src={book1} alt='hey' class="happy1"></img></a>
					<a href="https://www.google.co.in/books/edition/The_Midnight_Library/1shDzQEACAAJ?hl=en"><img  src={book2} alt='hey' class="happy2"></img></a>
					<a href="https://www.google.co.in/books/edition/The_Little_Paris_Bookshop/DfNGBQAAQBAJ?hl=en&gbpv=0"><img  src={book3} alt='hey' class="happy3"></img></a>
					<a href="https://www.google.co.in/books/edition/The_Switch/nqKODwAAQBAJ?hl=en&gbpv=0"><img  src={book4} alt='hey' class="happy4"></img></a>
					<a href="https://www.google.co.in/books/edition/The_Flatshare/wr9dDwAAQBAJ?hl=en&gbpv=0"><img  src={book5} alt='hey' class="happy5"></img></a>
					<a href="https://www.google.co.in/books/edition/The_Keeper_of_Lost_Things/-Rs5tAEACAAJ?hl=en"><img  src={book6} alt='hey' class="happy6"></img></a>
					<a href="https://www.google.co.in/books/edition/The_Rosie_Project/NJkLnwEACAAJ?hl=en"><img  src={book7} alt='hey' class="happy7"></img></a>
					<a href="https://www.google.co.in/books/edition/The_World_at_My_Feet/asLTDwAAQBAJ?hl=en&gbpv=0"><img  src={book8} alt='hey' class="happy8"></img></a>
		  </p>
			</div>
	  	</div>
	  
	)
}
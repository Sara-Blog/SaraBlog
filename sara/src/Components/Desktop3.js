import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavBar from './sidebar';
import good from '../public/normalemoji.png'
import happy from '../public/esmile.png'
import crazy from '../public/crazyemoji.png'
import sad from '../public/sademoji.png'
import hell from '../public/whathehell.png'
import love from '../public/loveemoji.png'
import book8 from '../public/whatthehell/book8.jpg';
import './Desktop3.css';
import { Link } from 'react-router-dom';
export default function Desktop3() 
{
	return (
		<>
		<SideNavBar/>
		<div class="desktop-3-RXn">
		<div class="auto-group-wvlp-wm2">
		  <div class="auto-group-21ng-gic">
			<p class="saras-blog-d84">SARA’S BLOG </p>
			<p class="explore-a-whole-new-world-of-books-through-my-blog-htc">Explore a whole new world of Books through my blog </p>
		  </div>
		 
		</div>	
		<div class="auto-group-pcfa-8pp">
		  
		  <p class="all-the-bright-places">What is your today's mood ?</p>
		  <Link to='/6'>
		 <img src={good} class="rectangle-9-toz1" alt='hey'></img></Link>
		 <Link to='/7'>
		  <img src={happy} class="rectangle-9-toz2" alt='hey'></img></Link>
		  <Link to='/8'>
		  <img src={crazy} class="rectangle-9-toz3" alt='hey'></img></Link>
		  <Link to='/9'>
		  <img src={love} class="rectangle-9-toz4" alt='hey'></img></Link>
		  <Link to='/10'>
		  <img src={sad} class="rectangle-9-toz5" alt='hey'></img></Link>
		  <Link to='/11'>
		  <img src={hell} class="rectangle-9-toz6" alt='hey'></img></Link>
		</div>
		<div class="about-us">
			<p class="text-us">
				Hi , We are the team Sara 
				<br></br>We provide  a new way to explore the world 
				through our app .We wanted to give the book readers an exciting 
			experience to read books<br></br> This is a page where  the readers can interact with other readers  to create an beautiful bond of readers in the world.This is a
			<br></br> With a blog like this, you share your real life experience in order to inspire or educate your target audience.here you’ll find everything from 
			<br></br>weekly book reviews, to write your own story in our page , to features on some of the best book blogs around, to write-ups on beautiful
			<br></br> bookstores from around the world, to literary city guides and some personal insights into the agony and ecstasy of life of an expat.
			<br></br>
			<br></br>        MY FAVOURITES OF ALL TIME 
				<a href="https://www.google.co.in/books/edition/All_the_Bright_Places/qxX8AwAAQBAJ?hl=en&gbpv=0"><img src={book8} alt="hey" class ="book8"></img></a>
			</p>
		</div>
		</div>

	  </>
	)
}
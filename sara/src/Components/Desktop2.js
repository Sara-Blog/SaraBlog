import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Desktop2.css';
import { Link } from 'react-router-dom';
export default function Desktop2()
{
	return (
		<div class="desktop-2-d4t">
				<div class="rectangle-5-YxY"></div>
				<p class="create-new-account-Frx">Create New Account </p>
				<Link to='/signup'>
				<p class="already-a-member-log-in-wzg">Already a member ? Log In </p>
				</Link>
				
				<label class="name-QWt">
		  			<input class="opacity-50" type="text"placeholder="Name" />
		  		</label>
				<label class="email-iXa">
		  			<input class="opacity-50" type="text"placeholder="E-mail" />
		  		</label>
				<label class="new-password-SCg">
		  			<input class="opacity-50" type="password"placeholder="New Password" />
		  		</label>
				<label class="confirm-password-9sn">
		  			<input class="opacity-50" type="password"placeholder="Confirm Password" />
		  		</label>
				<Link to='/books'>
					<button class="btn bg-transparent">Create Account</button>
				</Link>

	  		</div>

	)
};
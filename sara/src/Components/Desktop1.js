import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Desktop1.css';
import { Link } from 'react-router-dom';
export default function Desktop1() 
{
	return (
		<>
		<div className="desktop-1-yKE">
		<p className="welcome-vdn">Welcome  </p>	
		<div className="auto-group-haos-P3W">
		  <p className="login-rhn">Login</p>
		  <label>
		  <input class="opacity-25" type="text"placeholder="Username" />
		  </label>
		  <div className="line-2-8Yp">
		  </div>
		  <label class ="password-DqA">
		  <input class="opacity-25" type="password"placeholder="Password" />
		  </label>
		  <Link to='/home'>
		  <button className="auto-group-dihn-vja">Sign In </button>
		  </Link>
		  <div className="auto-group-zqct-i9e">
			<div className="line-4-SLY">
			</div>
			<p className="or-ks2">or</p>
			<div className="line-3-6AC">
			</div>
		  </div>
		  <div class="auto-group-5v8y-dvp">
			<div className="rectangle-4-AA4">
			</div>
			<a href="https://accounts.google.com/v3/signin/identifier?dsh=S68030599%3A1669912598578231&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAvlGBOL23gFfPrefPvTmPZL4GBxfgLelQTrVUUu7s1E_Q_EouGxp7J5XwTc20qbXzli4CKmnQ">
			<p className="g-Evc">G  </p>
			<button class="btn bg-transparent">Google</button>
			</a>
		  </div>
		  <div className="auto-group-f3da-4ue">
			<p className="dont-have-an-account--Ph2">Don’t have an Account ? </p>
			<Link to='/signup'>
			<button class="btn bg-transparent">
				Sign Up
			</button>
			</Link>
		  </div>
		</div> 
	  </div>
	  </>
	)
}
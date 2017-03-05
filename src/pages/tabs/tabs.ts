import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2';
import { Facebook } from 'ionic-native';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

data: any ={};

  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor( public angfire: AngularFire) {

  }

  // simple email and login logic..
  loginEmailAndPassword() {
	  console.log(this.data);
	  this.angfire.auth.login({
	    email: this.data.email,
	    password: this.data.password
	  },
	  {
	    provider: AuthProviders.Password,
	    method: AuthMethods.Password
	  }).then((response) => {
	    console.log(JSON.stringify(response));
	  })
}

	// FacebookLogin
	loginFacebook(){
		console.log("facebook login");
		Facebook.login(['email']).then((res) => {
			alert('loged in');
			console.log(res);
			alert(res);
		}, (err) => {
			alert(err);
		})
	}

	
}

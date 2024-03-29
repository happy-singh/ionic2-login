import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';
import { Facebook } from 'ionic-native';


 // Initialize Firebase
  export const config = {
    apiKey: "AIzaSyBgRiRsZYypkd7PugU4pCeOxFMut94kTac",
    authDomain: "tryproject-8857c.firebaseapp.com",
    databaseURL: "https://tryproject-8857c.firebaseio.com",
    storageBucket: "tryproject-8857c.appspot.com",
    messagingSenderId: "16833955297"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Facebook]
})
export class AppModule {}

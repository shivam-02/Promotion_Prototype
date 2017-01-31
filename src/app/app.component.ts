import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 //TODO Remove this object array according to our functionalities
  views: Object[] = [
    {
      name: 'Home',
      description: 'Dashboard',
      icon: 'home'
     
    },
    {
      name: 'My Account',
      description: 'Edit account information',
      icon: 'account_box'
     
    },
    {
      name: 'About',
      description: 'What is this about?',
      icon: 'settings'
     
    }
  ];
  
  //TODO Add signOut while implementing Oauth
  /*signOut():void{

  }*/
}

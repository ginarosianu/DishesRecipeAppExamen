//import { Component } from '@angular/core';

//@Component({
//  selector: 'app-home',
//  templateUrl: './home.component.html',
//})
//export class HomeComponent {

//}



import { Component } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {

  public heroImageUrl = require("./images/home3.jpg");
}

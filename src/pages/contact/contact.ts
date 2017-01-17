import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

@Component({
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(private nav: NavController) {

  }

  back() {
    this.nav.pop();
  }

}

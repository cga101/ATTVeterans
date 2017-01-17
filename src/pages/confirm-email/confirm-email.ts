import { Component } from '@angular/core'
import { UserServices } from '../../service/user';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'confirm-email.html'
})
export class ConfirmEmailPage {
  constructor(private nav: NavController,
    private userServices: UserServices) {
  }
}

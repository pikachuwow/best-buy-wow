import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-check-for-me',
  templateUrl: 'check-for-me.html',
})
export class CheckForMePage {

  private json1info: any;
  private json2info: any;
  private price: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.json1info = this.navParams.get('json1info');
    this.json2info = this.navParams.get('json2info');
  }

}

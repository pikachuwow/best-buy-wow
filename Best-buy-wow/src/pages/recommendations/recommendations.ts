import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-recommendations',
  templateUrl: 'recommendations.html',
})
export class RecommendationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public iab: InAppBrowser) {
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {LazyProvider} from '../../providers/lazy/lazy';

@IonicPage()
@Component({
  selector: 'page-recommendations',
  templateUrl: 'recommendations.html',
})
export class RecommendationsPage {

  public image2;
  public json2Info;

  constructor(public navCtrl: NavController, public navParams: NavParams, public iab: InAppBrowser, private lazyProvider: LazyProvider) {
    this.image2 = this.lazyProvider.image2;
    this.json2Info = this.lazyProvider.json2Info;
  }

}

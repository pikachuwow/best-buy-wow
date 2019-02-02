import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {MainPage} from '../main/main';

@IonicPage()
@Component({
  selector: 'page-tinder',
  templateUrl: 'tinder.html',
})
export class TinderPage {

  public currentImage: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  public nextImage(): void {
    if (++this.currentImage === 7) {
      this.alertCtrl.create({
        title: 'Your profile has been created!',
        buttons: ['OK']
      }).present().then(()=> {
        setTimeout(100);
        this.navCtrl.push(MainPage);
      });
      this.currentImage = 0;
    }
  }
}

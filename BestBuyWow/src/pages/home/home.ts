import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {MainPage} from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [MainPage]
})
export class HomePage {

  public currentImage: number = 0;

  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController) {

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

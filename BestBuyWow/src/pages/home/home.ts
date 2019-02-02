import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public currentImage: number = 0;

  constructor(public navCtrl: NavController) {

  }

  public lastImage(): void {
    this.currentImage--;
  }

  public nextImage(): void {
    this.currentImage++;
  }

}

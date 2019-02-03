import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {MainPage} from '../main/main';
import {TinderPage} from '../tinder/tinder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [MainPage]
})
export class HomePage {

  public input1: string;
  public input2: string;
  public input3: string;

  constructor(public navCtrl: NavController) {

  }

  public gotoTinderPage():void {
    this.navCtrl.push(TinderPage);
  }

}

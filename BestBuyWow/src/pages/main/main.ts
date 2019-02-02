import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DealsPage} from '../deals/deals';
import {ComparePage} from '../compare/compare';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  public backToBrowse(): void {
    this.navCtrl.pop();
  }

  public gotoDealsPage(): void {
    this.navCtrl.push(DealsPage)
  }

  public gotoComparePage(): void {
    this.navCtrl.push(ComparePage)
  }
}

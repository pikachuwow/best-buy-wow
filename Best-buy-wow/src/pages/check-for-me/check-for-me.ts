import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {RecommendationsPage} from '../recommendations/recommendations';

@IonicPage()
@Component({
  selector: 'page-check-for-me',
  templateUrl: 'check-for-me.html',
})

export class CheckForMePage {

  private json1info: any;
  private json2info: any;
  private price: string = '';

  public counter: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
    this.json1info = this.navParams.get('json1info');
    this.json2info = this.navParams.get('json2info');
  }

  public async gotoRecommendationsPage(): Promise<void> {
    const loading = this.loadingCtrl.create({content: 'calculating...'});
    await setTimeout(100);
    loading.dismiss();
    this.navCtrl.push(RecommendationsPage);
  }

  public incrementCounter(): void {
    this.counter++;
  }
}

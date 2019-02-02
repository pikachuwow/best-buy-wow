import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-comparison',
  templateUrl: 'comparison.html',
})
export class ComparisonPage {

  public json1Info = {
    rating1: '',
    resolution1: '',
    processor1: '',
    ram1: '',
    speed1: '',
  };

  public image1;
  public image2;

  public json2Info = {
    rating2: '',
    resolution2: '',
    processor2: '',
    ram2: '',
    speed2: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.image1=this.navParams.get('image1');
    this.image2=this.navParams.get('image2');
    this.json1Info.rating1 = this.navParams.get('rating1');
    this.json1Info.resolution1 = this.navParams.get('resolution1');
    this.json1Info.processor1 = this.navParams.get('processor1');
    this.json1Info.ram1 = this.navParams.get('ram1');
    this.json1Info.speed1 = this.navParams.get('speed1');
    this.json2Info.rating2 = this.navParams.get('rating2');
    this.json2Info.resolution2 = this.navParams.get('resolution2');
    this.json2Info.processor2 = this.navParams.get('processor2');
    this.json2Info.ram2 = this.navParams.get('ram2');
    this.json2Info.speed2 = this.navParams.get('speed2');
    console.log(this.image1);
    console.log(this.image2);
    console.log(this.json1Info);
    console.log(this.json2Info);
  }


}

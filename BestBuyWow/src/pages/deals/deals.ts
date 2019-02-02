import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

type IDeal = {
  name: string,
  description: string,
  price: string
}
@IonicPage()
@Component({
  selector: 'page-deals',
  templateUrl: 'deals.html',
})
export class DealsPage {

  public deals: IDeal[] = [
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
    {
      name: 'Amazon Alexa',
      description: 'Amazon smart home device',
      price: '$50.00'
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealsPage');
  }

}

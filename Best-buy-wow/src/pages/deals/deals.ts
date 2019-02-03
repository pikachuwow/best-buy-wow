import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';

type IDeal = {
  name: string,
  description: string,
  price: string,
  url: string
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
      price: '$50.00 - $20 off',
      url: 'https://www.bestbuy.ca/en-ca/product/amazon-echo-plus-2nd-generation-with-alexa-english-charcoal/13023974.aspx?'
    },
    {
      name: 'Google Home',
      description: 'Smart Home Device from Google',
      price: '$70.00 - $50 off',
      url: 'https://www.bestbuy.ca/en-ca/product/google-home-white-slate/10721100.aspx?'
    },
    {
      name: 'MSI GS65 Gaming Laptop',
      description: 'The ultimate gaming laptop',
      price: '$10 000.00 - $1200 off',
      url: 'https://www.bestbuy.ca/en-ca/product/msi-gs65-stealth-thin-15-6-gaming-laptop-16gb-256gb-intel-core-i7-8750h-geforce-gtx1070-win-10-pro-gs65-8rf-074ca-stealth/12618562.aspx?'
    },
    {
      name: 'Apple Macbook Pro',
      description: 'Simplicity is the ultimate sophistication',
      price: '$3000.00 - $1500 off',
      url: 'https://www.bestbuy.ca/en-ca/product/apple-macbook-pro-with-touch-bar-15-4-space-grey-intel-core-i7-2-6ghz-512gb-16gb-ram-english/12727802.aspx?'
    },
    {
      name: 'Ipad Pro',
      description: 'Power of stuff',
      price: '$500.00 - $200 off',
      url: 'https://www.bestbuy.ca/en-ca/product/apple-ipad-pro-12-9-512gb-with-wi-fi-4g-lte-space-grey/10750291.aspx?'
    },
    {
      name: 'Samsung Ultrawide Gaming Monitor',
      description: 'High refresh rate and greater field of view',
      price: '$1000.00 - $200 off',
      url: 'https://www.bestbuy.ca/en-ca/product/samsung-49-ultrawide-144hz-1ms-curved-led-gaming-monitor-lc49hg90dmnxza-charcoal-black/11292475.aspx?'
    },
    {
      name: 'ASUS ROG Zephyrus GX501 15.6" Gaming Laptop',
      description: '(Intel Core i7-7700HQ/512GB SSD/16GB RAM/Win10)',
      price: '$3,499.95',
      url: 'https://www.bestbuy.ca/en-ca/product/asus-rog-zephyrus-gx501-15-6-gaming-laptop-intel-core-i7-7700hq-512gb-ssd-16gb-ram-win10/10942019.aspx?'
    },
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public iab: InAppBrowser) {
  }

}

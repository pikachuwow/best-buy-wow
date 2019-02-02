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
      price: '$50.00',
      url: 'https://www.bestbuy.ca/en-ca/product/amazon-echo-plus-2nd-generation-with-alexa-english-charcoal/13023974.aspx?'
    },
    {
      name: 'Google Home',
      description: 'Smart Home Device from Google',
      price: '$70.00',
      url: 'https://www.bestbuy.ca/en-ca/product/google-home-white-slate/10721100.aspx?'
    },
    {
      name: 'MSI GS65 Gaming Laptop',
      description: 'The ultimate gaming laptop',
      price: '$10 000.00',
      url: 'https://www.bestbuy.ca/en-ca/product/msi-gs65-stealth-thin-15-6-gaming-laptop-16gb-256gb-intel-core-i7-8750h-geforce-gtx1070-win-10-pro-gs65-8rf-074ca-stealth/12618562.aspx?'
    },
    {
      name: 'Apple Macbook Pro',
      description: 'Simplicity is the ultimate sophistication',
      price: '$3000.00',
      url: 'https://www.bestbuy.ca/en-ca/product/apple-macbook-pro-with-touch-bar-15-4-space-grey-intel-core-i7-2-6ghz-512gb-16gb-ram-english/12727802.aspx?'
    },
    {
      name: 'Ipad Pro',
      description: 'Power of stuff',
      price: '$500.00',
      url: 'https://www.bestbuy.ca/en-ca/product/apple-ipad-pro-12-9-512gb-with-wi-fi-4g-lte-space-grey/10750291.aspx?'
    },
    {
      name: 'Bose QC35 II Headphones',
      description: 'Revolutionary noise cancelling headphones',
      price: '$450.00',
      url: ''
    },
    {
      name: 'Samsung Ultrawide Gaming Monitor',
      description: 'High refresh rate and greater field of view',
      price: '$1000.00',
      url: 'https://www.bestbuy.ca/en-ca/product/samsung-49-ultrawide-144hz-1ms-curved-led-gaming-monitor-lc49hg90dmnxza-charcoal-black/11292475.aspx?'
    },
    {
      name: 'Canon Laser Printer',
      description: 'Ultra-fast printing speeds and extreme colour accuracy',
      price: '$300.00',
      url: 'https://www.bestbuy.ca/en-ca/product/canon-imageclass-mf632cdw-colour-wireless-laser-printer/10748131.aspx?'
    },
    {
      name: 'Apple Watch Series 4',
      description: 'Power of a smartphone on the wrist of your arm',
      price: '$500.00',
      url: 'https://www.bestbuy.ca/en-ca/product/apple-watch-series-4-gps-44mm-space-grey-aluminium-case-with-black-sport-band/13018343.aspx?'
    },
    {
      name: 'Insignia Freezer',
      description: 'Freeze your food items at rapid speeds',
      price: '$139.99',
      url: 'https://www.bestbuy.ca/en-ca/product/insignia-3-5-cu-ft-chest-freezer-ns-cz35wh9/12656187.aspx?icmp=Recos_3across_tp_sllng_prdcts'
    },
    {
      name: 'Playstation 4 1TB',
      description: 'Play games at high definition resolutions',
      price: '$500.00',
      url: 'https://www.bestbuy.ca/en-ca/product/playstation-4-pro-1tb-console/12910052.aspx?'
    },
    {
      name: 'Fender Stratocaster',
      description: 'An electric guitar that suits all styles of music',
      price: '$900.00',
      url: 'https://www.bestbuy.ca/en-ca/product/fender-player-stratocaster-electric-guitar-tidepool/13024761.aspx?'
    },
    {
      name: '2.4G 4-Channel Foldable Drone',
      description: 'Has a 720p built-in camera and much user control and interation with the drone.',
      price: '$100.00',
      url: 'https://www.bestbuy.ca/en-ca/product/2-4g-4-channel-foldable-drone-with-wifi-720p-camera-altitude-hold-mode/12598527.aspx?'
    },
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public iab: InAppBrowser) {
  }

}

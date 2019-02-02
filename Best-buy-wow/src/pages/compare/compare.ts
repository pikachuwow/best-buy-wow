import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {HttpClient} from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-compare',
  templateUrl: 'compare.html',
})
export class ComparePage {

  private barcodes: string[] = ['13023974', '10721100'];
  private counter: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private http: HttpClient) {
  }

  public async startScan(): Promise<void> {
    this.barcodeScanner.scan().then(async ()=> {
      if (++this.counter == 2) {
        await this.compare();
      }
    })
  }

  private async compare(): Promise<void> {
    const jsonResponse1 = await this.http.get(`https://bizhacks.bbycastatic.ca/mobile-si/si/v4/pdp/overview/${this.barcodes[0]}?lang=en`).toPromise();
    const jsonResponse2 = await this.http.get(`https://bizhacks.bbycastatic.ca/mobile-si/si/v4/pdp/overview/${this.barcodes[1]}?lang=en`).toPromise();
    console.log(jsonResponse1);
    console.log(jsonResponse2);
  }
}

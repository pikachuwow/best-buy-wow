import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {HttpClient} from '@angular/common/http';
import {ComparisonPage} from '../comparison/comparison';

@IonicPage()
@Component({
  selector: 'page-compare',
  templateUrl: 'compare.html',
  entryComponents: [
    ComparisonPage
  ]
})
export class ComparePage {

  private barcodes: string[] = ['12884306', '12564471'];
  private counter: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private http: HttpClient) {
  }

  public async ngAfterViewInit(): Promise<void> {
    const interval = setInterval(() => {
      this.barcodeScanner.scan().then(async () => {
        if (++this.counter == 2) {
          clearInterval(interval);
          await this.compare();
        }
      });
    }, 1000);
  }

  private async compare(): Promise<void> {
    const jsonResponse1: any = (await this.http.get(`https://bizhacks.bbycastatic.ca/mobile-si/si/v4/pdp/overview/${this.barcodes[0]}?lang=en`).toPromise());
    const jsonResponse2: any = (await this.http.get(`https://bizhacks.bbycastatic.ca/mobile-si/si/v4/pdp/overview/${this.barcodes[1]}?lang=en`).toPromise());
    await this.navCtrl.push(ComparisonPage, {
      'image1': jsonResponse1.overview.media.primaryImage.url,
      'image2': jsonResponse2.overview.media.primaryImage.url,
      'rating1': jsonResponse1.overview.customerRatings.averageRating.score,
      'rating2': jsonResponse2.overview.customerRatings.averageRating.score,
      'resolution1': jsonResponse1.overview.specifications[1].value,
      'resolution2': jsonResponse2.overview.specifications[1].value,
      'processor1': jsonResponse1.overview.specifications[2].value,
      'processor2': jsonResponse2.overview.specifications[3].value,
      'ram1': jsonResponse1.overview.specifications[5].value,
      'ram2': jsonResponse2.overview.specifications[6].value,
      'speed1': '2.3 GHz',
      'speed2': jsonResponse2.overview.specifications[5].value,
    });
  }

}

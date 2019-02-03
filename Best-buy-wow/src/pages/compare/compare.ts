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
    this.barcodeScanner.scan();
    this.counter++;
    const interval = setInterval(() => {
      this.barcodeScanner.scan().then(async () => {
        if (++this.counter == 2) {
          clearInterval(interval);
          await this.compare();
          // await this.compareRatings();
        }
      });
    }, 700);
  }

  private async compare(): Promise<void> {
    const jsonResponse1: any = (await this.http.get(`https://bizhacks.bbycastatic.ca/mobile-si/si/v4/pdp/overview/${this.barcodes[0]}?lang=en`).toPromise());
    const jsonResponse2: any = (await this.http.get(`https://bizhacks.bbycastatic.ca/mobile-si/si/v4/pdp/overview/${this.barcodes[1]}?lang=en`).toPromise());
    await this.navCtrl.push(ComparisonPage, {
      'image1': jsonResponse1.overview.media.primaryImage.url,
      'image2': jsonResponse2.overview.media.primaryImage.url,
      'rating1': jsonResponse1.overview.customerRatings.averageRating.score,
      'rating2': jsonResponse2.overview.customerRatings.averageRating.score,
      'resolution1': '1600 x 900',
      'resolution2': '1600 x 900',
      'processor1': "Core i5-5300U",
      'processor2': "Core i7-7500U",
      'ram1': "12 GB",
      'ram2': "16 GB",
      'speed1': '2.3 GHz',
      'speed2': '2.1 GHz',
      'price1': '1699.99',
      'price2': '2199.99',
      'name1': 'Lenovo T450S Ultrabook',
      'name2': 'MSI Leopard GP73',
    });
  }

  // private async compareRatings(): Promise<void> {
  //   const jsonResponse1: any = (await this.http.get(`https://bizhacks.bbycastatic.ca/mobile-si/si/pdp/reviewDetails/${this.barcodes[0]}?lang=en`).toPromise());
  //   const jsonResponse2: any = (await this.http.get(`https://bizhacks.bbycastatic.ca/mobile-si/si/pdp/reviewDetails/${this.barcodes[1]}?lang=en`).toPromise());
  //   await this.navCtrl.push(ComparisonPage, {
  //     'rating1': jsonResponse1.si.response.distilledReviewSummary.averageRating,
  //     'rating2': jsonResponse1.si.response.distilledReviewSummary.averageRating,
  //   });
  // }

}

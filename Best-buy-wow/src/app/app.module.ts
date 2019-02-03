import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MainPage} from '../pages/main/main';
import {DealsPage} from '../pages/deals/deals';
import {ComparePage} from '../pages/compare/compare';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ComparisonPage} from '../pages/comparison/comparison';
import {CheckForMePage} from '../pages/check-for-me/check-for-me';
import {TinderPage} from '../pages/tinder/tinder';
import {RecommendationsPage} from '../pages/recommendations/recommendations';
import { LazyProvider } from '../providers/lazy/lazy';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    DealsPage,
    ComparePage,
    ComparisonPage,
    CheckForMePage,
    TinderPage,
    RecommendationsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    DealsPage,
    ComparePage,
    ComparisonPage,
    CheckForMePage,
    TinderPage,
    RecommendationsPage
  ],
  providers: [
    LazyProvider,
    BarcodeScanner,
    HttpClient,
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LazyProvider
  ]
})
export class AppModule {}

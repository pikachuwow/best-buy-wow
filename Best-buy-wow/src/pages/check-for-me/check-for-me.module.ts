import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckForMePage } from './check-for-me';

@NgModule({
  declarations: [
    CheckForMePage,
  ],
  imports: [
    IonicPageModule.forChild(CheckForMePage),
  ],
})
export class CheckForMePageModule {}

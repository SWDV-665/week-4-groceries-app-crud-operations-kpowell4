import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { InputDialogServiceService } from './input-dialog-service.service';

import { FormsModule} from '@angular/forms';
import { GroceriesServiceService } from './groceries-service.service';
import { ItemModals } from './item-modal/item-modal.page';


@NgModule({
  declarations: [ItemModals,AppComponent],
  
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }, GroceriesServiceService, InputDialogServiceService,],
  bootstrap: [AppComponent],
 
})
export class AppModule {}

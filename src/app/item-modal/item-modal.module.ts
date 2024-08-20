import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemModalPageRoutingModule } from './item-modal-routing.module';

import { ItemModals } from './item-modal.page';
import { AppComponent } from '../app.component';
import { Component } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ItemModalPageRoutingModule,AppRoutingModule
  ],

  bootstrap:[AppComponent],

  declarations: [AppComponent, ItemModals]
})
export class AppModule {}
export { ItemModals };


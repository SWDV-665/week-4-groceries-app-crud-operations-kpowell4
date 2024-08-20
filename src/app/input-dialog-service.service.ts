import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service';
import { ModalController } from '@ionic/angular';
import { ItemModals } from './item-modal/item-modal.page';


@Injectable({
  providedIn: 'root'
})


export class InputDialogServiceService {
  [x: string]: any;
  
  
  constructor(public dataService: GroceriesServiceService, public alertCtrl: AlertController, public modalCtrl: ModalController) {
  
  }

  async showPrompt(item?: any, index?: any) {
    const prompt = this.alertCtrl.create({
      header: item ? "Edit Item" : "Add Item",
      message: item ? "Please edit item..." : "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null  
        },
        
        {
          name: 'quantity',
          placeholder: "Quantity",
          value: item ? item.quantity : null
        },
      ],

      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },

        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if(index !== undefined) {
              this.dataService.editItem(item,index);
            }
            else {
              this.dataService.addItem(item);

            }
          }
        }
      ]

    });

    (await prompt).present();
  
   
  
  }}
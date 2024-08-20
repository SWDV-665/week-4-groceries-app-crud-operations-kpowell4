import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',

  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  [x: string]: any;
  
  
 


  title = "Grocery";

 
  constructor(public navCtrl: NavController, private toastController: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceService, 
    public inputDialogService: InputDialogServiceService,public modalCtrl: ModalController)  {}
  

  loadItems() {
    
    return this.dataService.getItems();
  }

  async removeItem(item:any, index:any) {
    console.log("Removing Item - ", item, index);
    
    const toast = await this.toastController.create({
      message:'Removing item -' + index + "...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  async editItem(item:any, index:any) {
    console.log("Edit Item - ", item, index);
    
    const toast = await this.toastController.create({
      message:'Editing item -' + index + "...",
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item ,index);
    
  }

  async addItem() {
    console.log("Add Item");
    
    this.inputDialogService.showPrompt();
  }

  

 



}

import { Component,Input} from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-item-modal',
  templateUrl: 'item-modal.page.html'
})
export class ItemModals {
  
  item: any;
  options: string [] = ['10', '15','100'];
  selectedOption: string = this.options[0];

  constructor(private modalCtrl: ModalController,) {
    
    console.log(this.item,this.selectedOption)
  }

  save() {
    const item = {
      name: this.item,
      options: this.selectedOption,
    };
    console.log(item,this.selectedOption);
    this.modalCtrl.dismiss(item, 'save');
    
  }

  cancel() {
    this.selectedOption = '';
    this.item; 
    this.modalCtrl.dismiss(this.item, 'cancel');   
    console.log('Cancel clicked');
  }
}

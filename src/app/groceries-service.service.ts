import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {
 
  items: {name: string, quantity: number} [] = [];

  constructor() {

  }

  getItems(){
    return this.items;
  }

  removeItem(index: any) {
    this.items.splice(index, 1);
  }
  addItem(item: any) {
    this.items.push(item);
  }
  editItem(item: any, index:any) {
    this.items[index] = item;
  }
}






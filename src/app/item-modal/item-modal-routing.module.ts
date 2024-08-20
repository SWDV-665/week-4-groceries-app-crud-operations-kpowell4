import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemModals } from './item-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ItemModals
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemModalPageRoutingModule {}

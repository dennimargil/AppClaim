import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReclamosPage } from './reclamos.page';

const routes: Routes = [
  {
    path: '',
    component: ReclamosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReclamosPageRoutingModule {}

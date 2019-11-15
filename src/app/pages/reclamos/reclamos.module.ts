import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclamosPageRoutingModule } from './reclamos-routing.module';

import { ReclamosPage } from './reclamos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclamosPageRoutingModule
  ],
  declarations: [ReclamosPage]
})
export class ReclamosPageModule {}

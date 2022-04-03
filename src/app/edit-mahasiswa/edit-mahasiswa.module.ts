import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMahasiswaPageRoutingModule } from './edit-mahasiswa-routing.module';

import { EditMahasiswaPage } from './edit-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMahasiswaPageRoutingModule
  ],
  declarations: [EditMahasiswaPage]
})
export class EditMahasiswaPageModule {}

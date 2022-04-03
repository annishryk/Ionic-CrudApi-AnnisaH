import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-mahasiswa',
  templateUrl: './edit-mahasiswa.page.html',
  styleUrls: ['./edit-mahasiswa.page.scss'],
})
export class EditMahasiswaPage implements OnInit {
  npm: string;
  nama: string;
  jurusan: string;
  prodi: string;
  kelas: string;
  public EDITData: any;

  constructor(
    private http: HttpClient,
    private toast: ToastController
  ) { }

  ionViewWillEnter() {
    this._Editdata();
}

update() {

}

_Editdata() {
  let data: Observable<any>;
}
  ngOnInit() {
  }

}

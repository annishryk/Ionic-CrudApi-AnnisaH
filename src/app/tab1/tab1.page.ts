import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  npm: string;
public GETSiswa: any;
public DeleteData: any;
  constructor(
    private http: HttpClient
  ) { }

  ionViewWillEnter() {
    this._Getdata();
    this._Deletedata();

}
_Getdata() {
  let data: Observable<any>;
  data = this.http.get('http://localhost/CodeIgniter_API-master/index.php/Api/GetData');
  data.subscribe(result => {
    this.GETSiswa = result;
    console.log(result);
  });
}

submit() {

  if(this.npm!=null ){
      this._Deletedata();
      console.log(this.npm);
      this.npm="";
      alert("Delete Data Successfully");
  }else{
      alert("Data tidak terhapus !");
  } 
  
}

_Deletedata() {
  let data: Observable<any>;
  data = this.http.get('http://localhost/CodeIgniter_API-master/index.php/Api/DeleteData/' + this.npm);
  data.subscribe(result => {
    this.DeleteData = result;
    console.log(result);
    if (result.status === 'Ok') { 
      alert("Delete Data Successfully");
    }
  });
}

}

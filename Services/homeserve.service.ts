import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeserveService {

  constructor(private http:HttpClient) { }
  
  apiUrl = environment.localUrl;

  templateApi(){
    return this.http.get(this.apiUrl+"Vintest");
  }

  griddata(){
    return this.http.get(this.apiUrl+"tableData");
  }
}

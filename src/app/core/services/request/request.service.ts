import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }
  getAll(routerName,paramter={}){
    return this.http.post<any>(environment.server+"/"+routerName+"/GetAll",paramter);
  }
}

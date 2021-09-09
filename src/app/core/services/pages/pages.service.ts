import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  pages = new BehaviorSubject<any[]>(null);
  constructor(private http:HttpClient) { }
  setPages():Observable<any>{
    return this.pages.asObservable();
  }
  getAllPages(){
    this.http.post<any>(environment.server+"/pages/GAP",{}).subscribe(res=>{
      this.pages.next(res);
    });
  }
}

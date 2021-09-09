import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  maps:any;
  fabricZ:any;
  projects:any;
  editMod:boolean=false;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.projects={maps:'["uploads/UP/kiven.pdf"]'};
    this.http.post<any>(environment.server+"/projects/gmps",{projectId:12456790}).subscribe(res=>{
      this.maps=res.data;
    });
  }
  

}

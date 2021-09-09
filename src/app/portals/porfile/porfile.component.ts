import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-porfile',
  templateUrl: './porfile.component.html',
  styleUrls: ['./porfile.component.scss']
})
export class PorfileComponent implements OnInit {

  typeForm=1;
  notes:any;
  notesValue='<p style="text-align:right">العاب انترنت إ٫ا كان هناك اي شي حول ه٫ه العملية يرجى الإتضال بنا لو سمحتحنم</p> ';
  aboutme:string="";
  breadCrumbItems:any[]=[];
  user:any=[];
  serverPath=environment.server
  constructor(private auth:AuthenticationService) {
    this.breadCrumbItems = [{ label: 'الرئيسية', path: '/' }, { label: 'الإعدادات', path: '/' }, { label: 'حسابي الشخصي', path: '/', active: true }];
   }

  ngOnInit() {
    this.user=(<any>this.auth.currentUser()).user;
    console.log(this.user);
  }

  editor:any;
  getEditor(event){
    this.editor=event.edit;
  }

}

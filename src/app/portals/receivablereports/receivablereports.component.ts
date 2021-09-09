import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-receivablereports',
  templateUrl: './receivablereports.component.html',
  styleUrls: ['./receivablereports.component.scss']
})
export class ReceivablereportsComponent implements OnInit {


  columns= [
    {label:"الصورة",name:"images",type:"image",id:'id',server:environment.server},
    {label:"رقم تقرير",name:"id",type:"text",id:'id'},       
    {label:"اسم تقرير",name:"projectName",type:"text",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];
  inputs=[
    {label:"الصورة",name:"images",type:"image",length:20,required:true,col:12,error:"الصورة مطلوبة",defult:"uploads/defult/image.png"},
    {label:"اسم تقرير",name:"projectName",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الأسم الأول فارغ"},
    {label:"تفاصيل تقرير",name:"projectDetails",type:"text",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},
    {label:"الملاحظات",name:"notes",type:"edit",length:null,required:true,col:12,error:"الملاحظات مطلوبة"},
  ]
  //btns=["delete","update","mapProduct"];
  btns={delete:true,update:true};
  addTitle="إضافة تقارير";
  editTitle="تعديل تقارير";
  ModelType="nofull";
  //nameAction
  routerName="projects";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'تقارير', path: '/' },
    { label: ' تقارير المقبوضات', path: '/LateReports', active: true }
   ];
   titleHeader=" تقارير المقبوضات";
  constructor() { }

  ngOnInit() {
  }

}

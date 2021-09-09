import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  columns= [
    {label:"اللوغو",name:"logo",type:"image",id:'id',server:environment.server},
    {label:"اسم السيستم",name:"systimName",type:"text",id:'id'},             
    {label:"التاريخ",name:"date",type:"date",id:'id'}, 
    {label:"حول",name:"about",type:"text",id:'id'}, 
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];
  inputs=[
    {label:"اللوغو",name:"logo",type:"image",length:20,required:true,col:12,error:"الصورة مطلوبة",defult:"uploads/defult/image.png",class:"logImage"},
    {label:"اسم السيستم",name:"systimName",type:"text",length:20,required:true,col:6,error:"لايمكن ان يكون الأسم الأول فارغ"},
    {label:"التاريخ",name:"date",type:"date",length:null,required:true,col:6,error:"التاريخ مطلوب"},
    {label:"حول",name:"about",type:"text",length:200,required:true,col:6,error:"التفاصيل مطلوبة"},
    {label:"محتوى رسالة البريد الالكتروني",name:"notes",type:"edit",length:null,required:true,col:12,error:"المحتوى مطلوب"},
  ]
  addTitle="إضافة إعدادات";
  editTitle="تعديل الإعدادات";
  ModelType="nofull";
  //nameAction
  routerName="settings";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الإعدادات', path: '/Settings' ,active: true },
   ];
   titleHeader="  الإعدادات";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

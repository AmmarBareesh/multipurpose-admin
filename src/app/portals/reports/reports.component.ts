import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {


  columns= [
    {label:"الصورة",name:"image",type:"image",id:'id',server:environment.server},
    {label:"اسم المصرف",name:"bankName",type:"text",id:'id'},
    {label:"رقم الحساب",name:"accountNumber",type:"text",id:'id'},
    {label:"تاريخ الانشاء",name:"bankDateFrom",type:"date",id:'id'}, 
    {label:"ملاحظات",name:"notes",type:"text",id:'id'}, 
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[
    {label:"الصورة",name:"images",type:"image",length:20,required:true,col:6,error:"الصورة مطلوبة",defult:"uploads/defult/image.png"},
    {label:"اسم المصرف",name:"userName",type:"text",length:20,required:true,col:6,error:"لايمكن ان يكون الأسم فارغ"},

    {label:"رقم الحساب",name:"accountNumber",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الرقم فارغ"},

    {label:"تاريخ الانشاء",name:"userDateFrom",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"ملاحظات",name:"notes",type:"text",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},


  ]

  addTitle="إضافة التقارير";
  editTitle="تعديل التقارير ";
  ModelType="nofull";
  //nameAction
  routerName="reports";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'التقارير', path: '/Reports' ,active: true },
   ];
   titleHeader="التقارير";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

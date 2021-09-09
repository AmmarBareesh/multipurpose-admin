import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {


  columns= [
    {label:"الصورة",name:"image",type:"image",id:'id',server:environment.server},
    {label:"اسم المصرف",name:"name",type:"text",id:'id'},
    {label:"رقم الحساب",name:"accountNumber",type:"text",id:'id'},
    {label:"تاريخ الانشاء",name:"date",type:"date",id:'id'}, 
    {label:"ملاحظات",name:"notes",type:"text",id:'id'}, 
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[

    {label:"اسم المصرف",name:"name",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الأسم فارغ"},

    {label:"الصورة",name:"image",type:"image",length:20,required:true,col:12,error:"الصورة مطلوبة",defult:"uploads/defult/image.png"},

    {label:"رقم الحساب",name:"accountNumber",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الرقم فارغ"},

    {label:"تاريخ الانشاء",name:"date",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"ملاحظات",name:"notes",type:"text",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},


  ]

  addTitle="إضافة مصرف";
  editTitle="تعديل المصارف والبنوك";
  ModelType="nofull";
  //nameAction
  routerName="banks";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الإعدادات', path: '/Settings' },
    { label: 'المصارف والبنوك ', path: '/Banks' ,active: true },
   ];
   titleHeader="  المصارف والبنوك";
   constructor() { 
  
  }

  ngOnInit() {
    createModel(this.inputs,this.routerName)
  }


}

import {createModel} from 'src/app/core/models/createClass'
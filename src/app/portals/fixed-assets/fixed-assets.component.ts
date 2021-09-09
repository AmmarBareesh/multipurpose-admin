import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed-assets',
  templateUrl: './fixed-assets.component.html',
  styleUrls: ['./fixed-assets.component.scss']
})
export class FixedAssetsComponent implements OnInit {


  columns= [
    {label:"الصورة",name:"images",type:"image",id:'id',server:environment.server},
    {label:"الاسم",name:"name",type:"text",id:'id'},
    {label:"المبلغ",name:"total",type:"text",id:'id'},
    {label:"العدد",name:"count",type:"text",id:'id'},
    {label:"الاندثار",name:"extinction",type:"text",id:'id'},
    {label:"المادة",name:"Subject",type:"text",id:'id'},
    {label:"تاريخ الشراء",name:"theDateOfPurchase",type:"date",id:'id'}, 
    {label:"ملاحظات",name:"notes",type:"text",id:'id'}, 
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[
    {label:"الصورة",name:"images",type:"image",length:20,required:true,col:12,error:"الصورة مطلوبة",defult:"uploads/defult/image.png"},

    {label:"الاسم",name:"name",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"تاريخ الشراء",name:"theDateOfPurchase",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"المبلغ",name:"total",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"العدد",name:"count",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"الاندثار",name:"extinction",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},


    {label:"المادة",name:"Subject",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"ملاحظات",name:"notes",type:"text",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},


    {label:"تحميل ملف فاتورة الشراء",name:"file",type:"file",length:null,required:true,col:12,error:"ملف غير صحيح",typeFiles:[".pdf"]},

  ]

  addTitle="إضافة الموجودات الثابتة";
  editTitle="تعديل  الموجودات الثابتة";
  ModelType="nofull";
  //nameAction
  routerName="fixedassets";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الادارة', path: '' },
    { label: ' الموجودات الثابتة', path: '/Fixed_assets' ,active: true },
   ];
   titleHeader=" الموجودات الثابتة";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

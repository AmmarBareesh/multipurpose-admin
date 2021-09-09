import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-treasury',
  templateUrl: './treasury.component.html',
  styleUrls: ['./treasury.component.scss']
})
export class TreasuryComponent implements OnInit {


  columns= [
    {label:"رقم الاستمارة",name:"fileNumber",type:"text",id:'id'},

    {label:"التاريخ",name:"date",type:"date",id:'id'}, 

    {label:"الصورة",name:"images",type:"image",id:'id',server:environment.server},

    {label:"المحاسب",name:"accounter",type:"text",id:'id'},

    {label:"المجموع",name:"total",type:"text",id:'id'},

    {label:"المجموع الكلي",name:"fullTotal",type:"text",id:'id'},

    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[
    {label:"رقم الاستمارة",name:"fileNumber",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الرقم فارغ"},

    {label:"الصورة",name:"images",type:"image",length:20,required:true,col:12,error:"الصورة مطلوبة",defult:"uploads/defult/image.png"},

    {label:"التاريخ ",name:"date",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"المحاسب",name:"accounter",type:"select",length:null,required:true,options:[
      {label:"ADMIN",value:1},
      {label:"LIMIT",value:2},
    ],col:12,error:"الاختيار مطلوب"},


    {label:"المجموع",name:"total",type:"text",length:20,required:true,col:6,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"المجموع الكلي ",name:"fullTotal",type:"text",length:20,required:true,col:6,error:"لايمكن ان يكون الحقل فارغ"},



  ]

  addTitle="إضافة الخزنة";
  editTitle="تعديل الخزنة";
  ModelType="nofull";
  //nameAction
  routerName="treasurys";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الحسابات', path: '/' },
    { label: 'الخزنة', path: '/Treasury' ,active: true },
   ];
   titleHeader=" الخزنة";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

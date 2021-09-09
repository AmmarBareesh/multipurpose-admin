import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-creditor',
  templateUrl: './creditor.component.html',
  styleUrls: ['./creditor.component.scss']
})
export class CreditorComponent implements OnInit {


  columns= [
    {label:" الاسم",name:"name",type:"text",id:'id'},
    {label:"النوع",name:"type",type:"text",id:'id'},
    {label:"تاريخ الانشاء",name:"createdAt",type:"date",id:'id'}, 
    {label:"المبلغ",name:"count",type:"text",id:'id'}, 
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[
    {label:"الاسم ",name:"name",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"النوع ",name:"type",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"المبلغ ",name:"count",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"تاريخ الانشاء",name:"createdAt",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"تحميل ملف",name:"file",type:"file",length:null,required:true,col:12,error:" ملف غير صحيح",typeFiles:[".pdf"]},

  ]

  addTitle="إضافة الصندوق ( دائن )";
  editTitle="تعديل الصندوق ( دائن )";
  ModelType="nofull";
  //nameAction
  routerName="creditors";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الحسابات', path: '' },
    { label: 'الصندوق ( دائن )', path: '/Creditor' ,active: true },
   ];
   titleHeader="الصندوق ( دائن )";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}


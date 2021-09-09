import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-entry-document',
  templateUrl: './entry-document.component.html',
  styleUrls: ['./entry-document.component.scss']
})
export class EntryDocumentComponent implements OnInit {


  columns= [
    {label:"الاسم",name:"name",type:"text",id:'id'},
    {label:"رقم السند",name:"bondNo",type:"text",id:'id'},
    {label:" التاريخ",name:"date",type:"date",id:'id'}, 
    {label:"التبويب والبيان",name:"TabAndStatement",type:"text",id:'id'},
    {label:"رقم حالة الصرف",name:"ExchangeCaseNumber",type:"text",id:'id'},
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[

    {label:"الاسم ",name:"name",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"رقم السند ",name:"bondNo",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:" التاريخ",name:"date",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"رقم حالة الصرف ",name:"ExchangeCaseNumber",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"التبويب والبيان",name:"TabAndStatement",type:"select",length:null,required:true,options:[
      {label:"التبويب والبيان ١",value:1},
      {label:"التبويب والبيان ٢",value:2},
    ],col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"المنظم",name:"regulator",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"المدقق",name:"checker",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"المحاسب",name:"role",type:"select",length:null,required:true,options:[
      {label:"المحاسب ١",value:1},
      {label:"المحاسب ٢",value:2},
    ],col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"ملف جديد",name:"file",type:"file",length:null,required:true,col:12,error:"ملف غير صحيح",typeFiles:[".pdf"]},


  ]

  addTitle="إضافة  مستند القيد";
  editTitle="تعديل  مستند القيد";
  ModelType="nofull";
  //nameAction
  routerName="entrydocuments";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الحسابات', path: '' },
    { label: ' مستند القيد', path: '/Entry_document' ,active: true },
   ];
   titleHeader=" مستند القيد";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-exchange-document',
  templateUrl: './exchange-document.component.html',
  styleUrls: ['./exchange-document.component.scss']
})
export class ExchangeDocumentComponent implements OnInit {



  columns= [
    {label:"الاسم",name:"name",type:"text",id:'id'},
    {label:"رقم السند",name:"bondNo",type:"text",id:'id'},
    {label:" التاريخ",name:"date",type:"date",id:'id'}, 
    {label:"التبويب والبيان",name:"TabAndStatement",type:"text",id:'id'},
    {label:"رقم الشيك ",name:"checkNumber",type:"text",id:'id'},
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[

    {label:"الاسم ",name:"name",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"رقم السند ",name:"bondNo",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:" التاريخ",name:"date",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"رقم الشيك  ",name:"checkNumber",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"التبويب والبيان",name:"TabAndStatement",type:"select",length:null,required:true,options:[
      {label:"التبويب والبيان ١",value:1},
      {label:"التبويب والبيان ٢",value:2},
    ],col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"المنظم",name:"regulator",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"المدقق",name:"checker",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"المصرف",name:"theBank",type:"select",length:null,required:true,options:[
      {label:"المصرف ١",value:1},
      {label:"المصرف ٢",value:2},
    ],col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"المشروع",name:"project",type:"select",length:null,required:true,options:[
      {label:"المشروع ١",value:1},
      {label:"المشروع ٢",value:2},
    ],col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"التبويب والبيان 2",name:"TabAndStatement_2",type:"select",length:null,required:true,options:[
      {label:"التبويب والبيان ١",value:1},
      {label:"التبويب والبيان ٢",value:2},
    ],col:12,error:"لايمكن ان يكون الحقل فارغ"},


    {label:"ملف جديد",name:"file",type:"file",length:null,required:true,col:12,error:"ملف غير صحيح",typeFiles:[".pdf"]},


  ]

  addTitle="إضافة  مستند الصرف";
  editTitle="تعديل  مستند الصرف";
  ModelType="nofull";
  //nameAction
  routerName="exchangedocuments";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الحسابات', path: '' },
    { label: ' مستند الصرف', path: '/Exchange_document' ,active: true },
   ];
   titleHeader=" مستند الصرف";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

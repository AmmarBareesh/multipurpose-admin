import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-incoming-books',
  templateUrl: './incoming-books.component.html',
  styleUrls: ['./incoming-books.component.scss']
})
export class IncomingBooksComponent implements OnInit {


  columns= [
    {label:"الاسم ",name:"fullName",type:"text",id:'id'},
    {label:"رقم الوارد ",name:"importNum",type:"text",id:'id'},
    {label:"رقم الكتاب ",name:"bookNum",type:"text",id:'id'},
    {label:"التاريخ ",name:"date",type:"date",id:'id'}, 
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[

    {label:" الاسم",name:"fullName",type:"text",length:20,required:true,col:6,error:"لايمكن ان يكون الأسم فارغ"},

    {label:"الموضوع",name:"notes",type:"text",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},

    {label:"التاريخ ",name:"date",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:" رقم الوارد",name:"importNum",type:"text",length:20,required:true,col:6,error:"لايمكن ان يكون الحقل فارغ"},

    {label:" رقم الكتاب",name:"bookNum",type:"text",length:20,required:true,col:6,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"تحميل ملف",name:"file",type:"file",length:null,required:true,col:12,error:"ملف غير صحيح",typeFiles:[".pdf"]},

  ]

  addTitle="إضافة الكتب الواردة";
  editTitle="تعديل الكتب الواردة";
  ModelType="nofull";
  //nameAction
  routerName="incomingbooks";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الادارة', path: '' },
    { label: 'الكتب الواردة', path: '/Incoming_books' ,active: true },
   ];
   titleHeader="الكتب الواردة";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

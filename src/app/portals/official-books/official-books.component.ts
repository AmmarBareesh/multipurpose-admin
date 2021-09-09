import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-official-books',
  templateUrl: './official-books.component.html',
  styleUrls: ['./official-books.component.scss']
})
export class OfficialBooksComponent implements OnInit {


  columns= [
    {label:"الى ",name:"officialBooksTo",type:"text",id:'id'},
    {label:"التاريخ ",name:"date",type:"date",id:'id'}, 
    {label:"رقم الكتاب ",name:"bookNum",type:"text",id:'id'},
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[
    {label:" الى",name:"officialBooksTo",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"الموضوع",name:"subject",type:"text",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},

    {label:" التاريخ",name:"date",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:" رقم الكتاب",name:"bookNum",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"المحتوى",name:"content",type:"edit",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},

    {label:"تحميل الملف",name:"file",type:"file",length:null,required:true,col:12,error:"الملف غير صحيح",typeFiles:[".pdf"]},

  ]

  addTitle="إضافة الكتب الرسمية";
  editTitle="تعديل الكتب الرسمية ";
  ModelType="nofull";
  //nameAction
  routerName="officialbooks";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الادارة', path: '' },
    { label: 'الكتب الرسمية', path: '/Official_books' ,active: true },
   ];
   titleHeader="الكتب الرسمية";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

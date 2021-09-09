import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {


  columns= [
    {label:"الاسم ",name:"meetingName",type:"text",id:'id'},
    {label:"التاريخ ",name:"date",type:"date",id:'id'}, 
    {label:"رقم الصادر",name:"exportNum",type:"text",id:'id'},
    {label:"رقم المحضر",name:"recordNumber",type:"text",id:'id'},
    {label:"ملاحظات",name:"notes",type:"text",id:'id'}, 
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[

    {label:"الاسم ",name:"meetingName",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الأسم فارغ"},

    {label:"التاريخ ",name:"date",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"رقم الصادر ",name:"exportNum",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الرقم فارغ"},

    {label:"رقم المحضر",name:"recordNumber",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الرقم فارغ"},

    {label:"ملاحظات",name:"notes",type:"text",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},

    {label:"تحميل ملف ",name:"file",type:"file",length:null,required:true,col:12,error:"الملف غير صحيح",typeFiles:[".pdf"]},


  ]

  addTitle="إضافة  محاضر الاجتماع";
  editTitle="تعديل  محاضر الاجتماع ";
  ModelType="nofull";
  //nameAction
  routerName="meetings";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الادارة', path: '' },
    { label: ' محاضر الاجتماع', path: '/Meetings' ,active: true },
   ];
   titleHeader=" محاضر الاجتماع";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  columns= [
    {label:"الصورة",name:"images",type:"image",id:'id',server:environment.server},
    {label:"الاسم",name:"name",type:"text",id:'id'},
    {label:"تاريخ الانتساب",name:"addDate",type:"date",id:'id'}, 
    {label:"التحصيل العلمي",name:"achivement",type:"text",id:'id'}, 
    {label:"الدور",name:"role",type:"text",id:'id'}, 
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];
  inputs=[
    {label:"الصورة",name:"images",type:"image",length:20,required:true,col:6,error:"الصورة مطلوبة",defult:"uploads/defult/image.png"},
    {label:"الاسم",name:"name",type:"text",length:20,required:true,col:6,error:"لايمكن ان يكون الأسم الأول فارغ"},
    {label:"البريد الإلكتروني",name:"email",type:"email",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح"},
    {label:"رقم الهاتف",name:"phone",type:"phone",length:null,required:true,col:12,error:"رقم الهاتف"},
    {label:"تاريخ الانتساب",name:"addDate",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},
    {label:"التحصيل العلمي",name:"achivement",type:"text",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},
    {label:"الدور",name:"role",type:"select",length:null,required:true,options:[
      {label:"ADMIN",value:1},
      {label:"LIMIT",value:2},
    ],col:12,error:"الاختيار مطلوب"},

  ]
  addTitle="إضافة مستخدم";
  editTitle="تعديل المستخدمين";
  ModelType="nofull";
  //nameAction
  routerName="user";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الإعدادات', path: '/Settings' },
    { label: 'مستخدمي النظام', path: '/Users' ,active: true },
   ];
   titleHeader="  المستخدمين";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  /*
    {label:"الأسم الأول",name:"firstName",type:"text",length:20,required:true,col:12,error:"البريد الإلكتروني غير صحيح"},
    {label:"الأسم الثاني",name:"lastName",type:"text",length:20,required:true,col:12,error:"البريد الإلكتروني غير صحيح"},
    {label:"البريد الإلكتروني",name:"email",type:"email",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح"},
    {label:"مستند كتابي",name:"notes",type:"edit",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح"},
    {label:"الدور",name:"role",type:"select",length:null,required:true,options:[
      {label:"ADMIN",value:1},
      {label:"LIMIT",value:2},
    ],col:12,error:"البريد الإلكتروني غير صحيح"},
    {label:"رقم الهاتف",name:"phone",type:"phone",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح"},
    {label:"الصور",name:"gal",type:"gallery",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح"},
    {label:"صورة",name:"image",type:"image",length:null,required:true,col:12},
    {label:"ملف المستنات",name:"file",type:"file",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح",typeFiles:[".pdf"]},
    {label:"التاريخ",name:"date",type:"date",length:null,required:true,col:6,error:"البريد الإلكتروني غير صحيح"},
    {label:"الوقت",name:"time",type:"time",length:null,required:true,col:6,error:"البريد الإلكتروني غير صحيح"},
  */
  //data for view table
  columns= [
    {label:"الصورة",name:"images",type:"image",id:'id',server:environment.server},
    {label:"رقم المشروع",name:"id",type:"text",id:'id'},       
    {label:"اسم المشروع",name:"projectName",type:"text",id:'id'},             
    {label:"تاريخ الإنشاء",name:"projectDateFrom",type:"date",id:'id'}, 
    {label:"تفاصيل المشروع",name:"projectDetails",type:"text",id:'id'}, 
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];
  inputs=[
    {label:"الصورة",name:"images",type:"image",length:20,required:true,col:12,error:"الصورة مطلوبة",defult:"uploads/defult/image.png"},
    {label:"اسم المشروع",name:"projectName",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الأسم الأول فارغ"},
    {label:"تاريخ المشروع",name:"projectDateFrom",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},
    {label:"تفاصيل المشروع",name:"projectDetails",type:"text",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},
    {label:"الملاحظات",name:"notes",type:"edit",length:null,required:true,col:12,error:"الملاحظات مطلوبة"},
    // NewPortal
    {label:"تحميل خريطة",name:"maps",type:"file",lengthFile:1,required:true,col:12,error:" تحميل ملف غير صحيح",typeFiles:[".pdf"]},
  ]
  //btns=["delete","update","mapProduct"];
  btns={delete:true,update:true,mapProduct:true};
  addTitle="إضافة مشروع";
  editTitle="تعديل المشروع";
  ModelType="nofull";
  //nameAction
  routerName="projects";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الإعدادات', path: '/' },
    { label: 'المشاريع', path: '/Projects', active: true }
   ];
   titleHeader="  إدارة المشاريع";
   constructor() { 
  
  }

  ngOnInit() {
  }


}

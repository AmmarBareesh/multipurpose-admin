import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-general-authority',
  templateUrl: './general-authority.component.html',
  styleUrls: ['./general-authority.component.scss']
})
export class GeneralAuthorityComponent implements OnInit {


  columns= [
    {label:"الصورة",name:"images",type:"image",id:'id',server:environment.server},
    {label:"الاسم",name:"fullName",type:"text",id:'id'},
    {label:"العنوان",name:"address",type:"text",id:'id'},
    {label:"تاريخ الانتساب",name:"addDate",type:"date",id:'id'}, 
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[
    {label:"الصورة",name:"images",type:"image",length:20,required:true,col:6,error:"الصورة مطلوبة",defult:"uploads/defult/image.png"},
    {label:"الاسم الرباعي واللقب",name:"fullName",type:"text",length:20,required:true,col:6,error:"لايمكن ان يكون الأسم فارغ"},

    {label:" المواليد",name:"birthDate",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"التحصيل الدراسي ",name:"achivment",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:" العنوان ",name:"address",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"رقم الهاتف",name:"phone",type:"phone",length:null,required:true,col:12,error:" رقم الهاتف غير صحيح"},

    {label:"تاريخ الانتساب",name:"addDate",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"ملاحظات",name:"notes",type:"text",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},

    {label:" تحميل المستمسكات الاربعة",name:"fourthDocument",type:"file",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح",typeFiles:[".pdf"]},

    {label:" تحميل طلب الانتساب",name:"addAdmissionForm",type:"file",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح",typeFiles:[".pdf"]},


  ]

  addTitle="إضافة عضو الهيئة العامة";
  editTitle="تعديل الهيئة العامة";
  ModelType="nofull";
  //nameAction
  routerName="generalauthoritys";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الادارة', path: '' },
    { label: ' الهيئة العامة', path: '/General_authority' ,active: true },
   ];
   titleHeader=" الهيئة العامة";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

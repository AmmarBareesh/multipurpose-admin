import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {


  columns= [
    {label:"الصورة",name:"image",type:"image",id:'id',server:environment.server},
    {label:"الاسم",name:"fullName",type:"text",id:'id'},
    {label:"الوظيفة ",name:"jobTitle",type:"text",id:'id'},
    {label:"تاريخ المباشرة",name:"startDate",type:"date",id:'id'}, 
    {label:"رقم الهاتف",name:"phone",type:"text",id:'id'}, 
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[
    {label:"الصورة",name:"image",type:"image",length:20,required:true,col:6,error:"الصورة مطلوبة",defult:"uploads/defult/image.png"},
    {label:"الاسم ",name:"fullName",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"الوظيفة ",name:"jobTitle",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:" المواليد",name:"birthDate",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"التحصيل الدراسي ",name:"achivment",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:" تاريخ المباشرة",name:"startDate",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"العنوان ",name:"address",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"رقم الهاتف",name:"phone",type:"phone",length:null,required:true,col:12,error:"رقم الهاتف غير صحيح"},

    {label:"الراتب الشهري  ",name:"salary",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"تحميل المستمسكات",name:"file",type:"file",length:null,required:true,col:12,error:"ملف غير صحيح",typeFiles:[".pdf"]},

    {label:"الصورة",name:"gal",type:"gallery",length:null,required:true,col:12,error:" الصورة غير صحيحة"},

  ]

  addTitle="إضافة الموظفين";
  editTitle="تعديل الموظفين ";
  ModelType="nofull";
  //nameAction
  routerName="employees";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الادارة', path: '' },
    { label: 'الموظفين', path: '/Employees' ,active: true },
   ];
   titleHeader="الموظفين";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-administrative-board',
  templateUrl: './administrative-board.component.html',
  styleUrls: ['./administrative-board.component.scss']
})
export class AdministrativeBoardComponent implements OnInit {


  columns= [
    {label:"الصورة",name:"image",type:"image",id:'id',server:environment.server},
    {label:"الاسم",name:"fullName",type:"text",id:'id'},
    {label:"الدورة الانتخابية",name:"electoralAdministration",type:"text",id:'id'},
    {label:"تاريخ الانتساب",name:"addDate",type:"date",id:'id'},  
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[
    {label:"الصورة",name:"image",type:"image",length:20,required:true,col:6,error:"الصورة مطلوبة",defult:"uploads/defult/image.png"},
    
    {label:"الاسم الرباعي واللقب",name:"fullName",type:"text",length:20,required:true,col:6,error:"لايمكن ان يكون الأسم فارغ"},

    {label:"رقم الهاتف",name:"phone",type:"phone",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح"},

    {label:"العنوان",name:"address",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"}, 

    {label:"الدورة الانتخابية",name:"electoralAdministration",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"التحصيل الدراسي",name:"achivment",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"المواليد",name:"birthDate",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"تاريخ الانتساب ",name:"addDate",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"ملاحظات",name:"notes",type:"text",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},

    {label:"تحميل المستمسكات الاربعة",name:"file",type:"file",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح",typeFiles:[".pdf"]},

  ]

  
  addTitle="إضافة عضو اداري";
  editTitle="تعديل مجلس الادارة";
  ModelType="nofull";
  //nameAction
  routerName="administrativeboards";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الادارة', path: '' },
    { label: 'مجلس الادارة ', path: '/administrativeboards' ,active: true },
   ];
   titleHeader="مجلس الادارة";
   
  constructor() { 
   
  }

  ngOnInit() {
  }


}

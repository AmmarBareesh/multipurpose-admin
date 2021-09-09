import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-join-request',
  templateUrl: './join-request.component.html',
  styleUrls: ['./join-request.component.scss']
})
export class JoinRequestComponent implements OnInit {


  columns= [
    {label:"الصورة",name:"image",type:"image",id:'id',server:environment.server},
    {label:"الاسم واللقب",name:"fullName",type:"text",id:'id'},
    {label:"رقم العضوية",name:"membershipNo",type:"text",id:'id'},
    {label:"تاريخ الانتساب",name:"addDate",type:"date",id:'id'}, 
    {label:"الوظيفة ",name:"jobTitle",type:"text",id:'id'},
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[
    {label:"الاسم واللقب",name:"fullName",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"رقم العضوية",name:"membershipNo",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"الوظيفة ",name:"jobTitle",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},
    {label:"رقم الهاتف",name:"phoneNumber",type:"phone",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"العنوان ",name:"address",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"تاريخ الانتساب",name:"addDate",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},
    {label:"رقم الهوية المدنية",name:"numberId",type:"text",length:null,required:true,col:6,error:"الحقل مطلوب"},
    {label:"تاريخ الهوية",name:"dataId",type:"date",length:null,required:true,col:6,error:"التاريخ مطلوب"},
    {label:"الصورة",name:"image",type:"image",length:20,required:true,col:6,error:"الصورة مطلوبة",defult:"uploads/defult/image.png"},

  ]

  addTitle="إضافة طلبات الانتساب";
  editTitle="تعديل طلبات الانتساب";
  ModelType="nofull";
  //nameAction
  routerName="joinrequests";

  btns={delete:true,update:true,mapProduct:false,pinter:true,showID:true};
  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الادارة', path: '' },
    { label: 'طلبات الانتساب ', path: '/Join_request' ,active: true },
   ];
   titleHeader=" طلبات الانتساب";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

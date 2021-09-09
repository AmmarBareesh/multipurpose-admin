import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-official-visits',
  templateUrl: './official-visits.component.html',
  styleUrls: ['./official-visits.component.scss']
})
export class OfficialVisitsComponent implements OnInit {


  columns= [
    {label:"اسم الزيارة",name:"visitingName",type:"text",id:'id'},
    {label:"التاريخ ",name:"date",type:"date",id:'id'}, 
    {label:"التفاصيل",name:"details",type:"text",id:'id'}, 
    {label:"العدد",name:"count",type:"text",id:'id'}, 
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[
    {label:"اسم الزيارة",name:"visitingName",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الأسم فارغ"},

    {label:"التاريخ ",name:"date",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"العدد",name:"count",type:"number",length:20,required:true,col:12,error:"لايمكن ان يكون الأسم فارغ"},

    {label:"التفاصيل",name:"details",type:"text",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},

    {label:"تحميل ملف",name:"file",type:"file",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح",typeFiles:[".pdf"]},

  ]

  addTitle="إضافة الزيارات الرسمية";
  editTitle="تعديل الزيارات الرسمية ";
  ModelType="nofull";
  //nameAction
  routerName="officialvisits";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الادارة', path: '' },
    { label: 'الزيارات الرسمية', path: '/Official_visits' ,active: true },
   ];
   titleHeader="الزيارات الرسمية";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

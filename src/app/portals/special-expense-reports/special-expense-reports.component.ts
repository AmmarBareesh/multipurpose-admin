import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-special-expense-reports',
  templateUrl: './special-expense-reports.component.html',
  styleUrls: ['./special-expense-reports.component.scss']
})
export class SpecialExpenseReportsComponent implements OnInit {

  columns= [
    {label:"الصورة",name:"images",type:"image",id:'id',server:environment.server},
    {label:"رقم تقرير",name:"id",type:"text",id:'id'},       
    {label:"اسم تقرير",name:"projectName",type:"text",id:'id'},             
    {label:"تاريخ الإنشاء",name:"projectDateFrom",type:"date",id:'id'}, 
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];
  inputs=[
    {label:"الصورة",name:"images",type:"image",length:20,required:true,col:12,error:"الصورة مطلوبة",defult:"uploads/defult/image.png"},
    {label:"اسم تقرير",name:"projectName",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الأسم الأول فارغ"},
    {label:"تاريخ تقرير",name:"projectDateFrom",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},
    {label:"الملاحظات",name:"notes",type:"edit",length:null,required:true,col:12,error:"الملاحظات مطلوبة"},
  ]
  //btns=["delete","update","mapProduct"];
  btns={delete:true,update:true};
  addTitle="إضافة تقارير";
  editTitle="تعديل تقارير";
  ModelType="nofull";
  //nameAction
  routerName="projects";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'تقارير', path: '/' },
    { label: ' تقارير مصروفات', path: '/SpecialExpense', active: true }
   ];
   titleHeader=" تقارير المصروفات حسب نظام الجمعية الخاص";
  constructor() { }

  ngOnInit() {
  }

}

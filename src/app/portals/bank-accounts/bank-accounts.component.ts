import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.scss']
})
export class BankAccountsComponent implements OnInit {


  columns= [
    {label:"الصورة",name:"images",type:"image",id:'id',server:environment.server},
    {label:"الاسم ",name:"name",type:"text",id:'id'},
    {label:"رقم الحساب",name:"accountNumber",type:"text",id:'id'},
    {label:"تاريخ الانشاء",name:"date",type:"date",id:'id'}, 
    {label:"ملاحظات",name:"notes",type:"text",id:'id'}, 
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[
    {label:"الاسم",name:"name",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الأسم فارغ"},

    {label:"رقم الحساب",name:"accountNumber",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الرقم فارغ"},

    {label:"ملاحظات",name:"notes",type:"text",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},

    {label:"تاريخ الانشاء",name:"date",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"الصورة",name:"images",type:"image",length:20,required:true,col:12,error:"الصورة مطلوبة",defult:"uploads/defult/image.png"},

  ]

  addTitle="إضافة حسابات البنوك";
  editTitle="تعديل حسابات البنوك";
  ModelType="nofull";
  //nameAction
  routerName="bankaccounts";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الحسابات', path: '' },
    { label: 'حسابات البنوك', path: '/Bank_accounts' ,active: true },
   ];
   titleHeader="حسابات البنوك";
   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

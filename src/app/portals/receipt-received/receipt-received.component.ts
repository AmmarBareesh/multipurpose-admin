import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-receipt-received',
  templateUrl: './receipt-received.component.html',
  styleUrls: ['./receipt-received.component.scss']
})
export class ReceiptReceivedComponent implements OnInit {


  columns= [
    {label:"العدد",name:"count",type:"text",id:'id'},
    {label:"تاريخ الانشاء",name:"date",type:"date",id:'id'}, 
    {label:"المبلغ رقما",name:"countNumburing",type:"text",id:'id'},
    {label:"ذلك عن",name:"countFrom",type:"text",id:'id'},
    {label:"المشروع",name:"project",type:"text",id:'id'},
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[
    {label:"العدد",name:"count",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الرقم فارغ"},

    {label:"تاريخ الانشاء",name:"date",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"المبلغ رقما",name:"countNumburing",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الرقم فارغ"},

    {label:"المبلغ كتابة",name:"countWriting",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الرقم فارغ"},

    {label:"ذلك عن",name:"countFrom",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الرقم فارغ"},

    {label:"التبويب والبيان",name:"TabStatement",type:"select",length:null,required:true,options:[
      {label:"الاثاث",value:1},
      {label:"الاجهزة",value:2},
    ],col:12,error:"الاختيار مطلوب"},

    {label:"نوع التسديد",name:"PaymentType",type:"select",length:null,required:true,options:[
      {label:"نقدي",value:1},
      {label:"حوالة بنكية",value:2},
    ],col:12,error:"الاختيار مطلوب"},

    {label:" المشروع",name:"project",type:"select",length:null,required:true,options:[
      {label:"المشروع ١",value:1},
      {label:"المشروع ٢",value:2},
    ],col:12,error:"الاختيار مطلوب"},

    {label:" 2 التبويب والبيان",name:"TabStatement_2",type:"select",length:null,required:true,options:[
      {label:"انتساب",value:1},
      {label:"رسوم تحويل",value:2},
    ],col:12,error:"الاختيار مطلوب"},

    {label:"تحميل ملف",name:"file",type:"file",length:null,required:true,col:12,error:" تحميل ملف غير صحيح",typeFiles:[".pdf"]},

  ]

  addTitle="إضافة وصل القبض";
  editTitle="تعديل وصل القبض";
  ModelType="nofull";
  //nameAction
  routerName="receiptreceiveds";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'الحسايات', path: '' },
    { label: 'وصل القبض ', path: '/Receipt_received' ,active: true },
   ];
   titleHeader="  وصل القبض";
   btns={delete:true,update:true,mapProduct:false,pinter:true,showID:true};

   
   constructor() { 
  
  }

  ngOnInit() {
  }


}

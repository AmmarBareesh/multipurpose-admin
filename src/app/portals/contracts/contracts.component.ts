import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { hideElment } from 'src/app/core/models/FORM';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {


  columns= [
    {label:"الاسم ",name:"name",type:"text",id:'id'},
    {label:"تاريخ العقد",name:"contractDate",type:"date",id:'id'},
    {label:"رقم العقد",name:"contractNo",type:"date",id:'id'},
    {label:"مساحة القطعة",name:"peiceSpace",type:"date",id:'id'},
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[

    {label:"الاسم ",name:"name",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"الموضوع",name:"subject",type:"text",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},
    // NewPortal
    {label:"المشروع",name:"project",type:"select",length:null,required:true,options:[
      {label:"المشروع ١",value:1},
      {label:"المشروع ٢",value:2},
    ],col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"رقم العقد",name:"contractNo",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    // NewPortal
    {label:"مساحة القطعة",name:"peiceSpace",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

        // NewPortal
        {label:"رقم القطعة",name:"pieceNo",type:"select",length:null,required:true,options:[
          {label:"القطعة ١",value:1},
          {label:"القطعة ٢",value:2},
        ],col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"تاريخ العقد",name:"contractDate",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},


    {label:"زمن القسط ",name:"installmentTime",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},


    {label:"رقم الوصل ",name:"receiptNumber",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"تحميل ملف",name:"file",type:"file",length:null,required:true,col:12,error:" ملف غير صحيح",typeFiles:[".pdf"]},

  ]

  addTitle="إضافة العقود";
  editTitle="تعديل العقود";
  ModelType="nofull";
  //nameAction
  routerName="contracts";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'المبيعات', path: '' },
    { label: 'المصارف والبنوك ', path: '/Contracts' ,active: true },
   ];
   titleHeader="العقود";
   Events:any[]=[
    {name:"project",nameEevent:"change",fun:(event)=>{this.loadPices(event)}},
    {name:"pieceNo",nameEevent:"change",fun:(event)=>{this.changePicesInput(event);}},
    {name:"modal",nameEevent:"loadShowModel",fun:(event)=>{this.loadShowModel(event);}},
   ];
   constructor(private http:HttpClient) { 
  
  }
  loadShowModel(event){
    if(event!=0)
    {
      hideElment(["project"]);
      hideElment(["pieceNo"]);
      hideElment(["peiceSpace"]);
    }
    else if(event!=1){
      this.loadProjects();
    }

  }
  loadProjects(){
    this.http.post<any>(environment.server+"/projects/GetAll",{limit:"50",offset:"1",search:""}).subscribe(res=>{
      this.inputs.forEach(resFor=>{
        if(resFor.name=="project")
        {
          resFor.options=[];
          let num=0;
          res.data.forEach(option => {
            if(num==0)
            {
              let e={target:{value:option.id}}
              this.loadPices(e);
            }
            num++
            resFor.options.push({label:option.projectName,value:option.id});
          });
          
        }
      })
     });
  }
  loadPices(e){
    this.http.post<any>(environment.server+"/projects/getAllMapWithresved",{projectId:e.target.value}).subscribe(res=>{
      this.inputs.forEach(resFor=>{
        if(resFor.name=="pieceNo")
        {
          resFor.options=[];
          res.data.forEach((option) => {
            if(option.counts==0 && option.countsConstract==0)
            {
              let lebel=option.pieceName+" "+option.pieceId;
              (<any>resFor.options).push({label:lebel,value:option.pieceId});
            }
          });
        }
      })
     });

  }
  ngOnInit() {
  }

  changePicesInput(e){
    
  }

}

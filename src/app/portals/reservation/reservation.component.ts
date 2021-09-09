import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { hideElment } from 'src/app/core/models/FORM';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  columns= [
    {label:"الاسم",name:"userName",type:"text",id:'id'},
    {label:"المشروع",name:"project",type:"text",id:'id'},
    {label:"رقم الهاتف",name:"phone",type:"text",id:'id'},
    {label:"رقم القطعة",name:"sectionNumber",type:"text",id:'id'},
    {label:"تاريخ من",name:"dateFrom",type:"date",id:'id'}, 
    {label:"تاريخ الى",name:"dateTo",type:"date",id:'id'}, 
    {label:"ملاحظات",name:"notes",type:"text",id:'id'}, 
    {label:"الحالة",name:"status",type:"switsh",id:'id'},
    {label:"أوامر",name:"btn",type:"btn",id:'id'},
  ];

  inputs=[
    {label:"الاسم الكامل",name:"userName",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الأسم فارغ",Element:null},

    {label:"المشروع",name:"project",id:"project",type:"select",length:null,required:true,options:[
      {label:"المشروع 1",value:1},
      {label:"المشروع 2",value:2},
    ],col:12,error:"الاختيار مطلوب"},

    {label:"رقم الهاتف",name:"phone",type:"phone",length:null,required:true,col:12,error:"رقم الهاتف"},


    // NewPortal
    {label:"مساحة القطعة",name:"peiceSpace",type:"text",length:20,required:true,col:12,error:"لايمكن ان يكون الحقل فارغ"},
    // NewPortal
    {label:"رقم القطعة",name:"pieceNo",type:"select",length:null,required:true,options:[
      {label:"القطعة ١",value:1},
      {label:"القطعة ٢",value:2},
    ],col:12,error:"لايمكن ان يكون الحقل فارغ"},

    {label:"تاريخ من",name:"dateFrom",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"تاريخ الى",name:"dateTo",type:"date",length:null,required:true,col:12,error:"التاريخ مطلوب"},

    {label:"ملاحظات",name:"notes",type:"text",length:200,required:true,col:12,error:"التفاصيل مطلوبة"},

    {label:"تحميل ملف",name:"file",type:"file",length:null,required:true,col:12,error:"حصل خطأ في الملف",typeFiles:[".pdf"]},

  ]


  addTitle="إضافة الحجز";
  editTitle="تعديل الحجز";
  ModelType="nofull";
  //nameAction
  routerName="reservations";

  //title and titleHeader
  title=[
    { label: 'الرئيسية', path: '/' },
    { label: 'المبيعات', path: '' },
    { label: 'الحجز', path: '/Reservation' ,active: true },
   ];
   titleHeader=" الحجز";
   

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
  ngOnInit() {

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
  changePicesInput(e){
    
  }


}

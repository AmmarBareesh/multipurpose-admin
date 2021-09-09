import { HostListener,Component, Input, OnInit, Output, TemplateRef, ViewChild ,EventEmitter} from '@angular/core';
import { RequestService } from 'src/app/core/services/request/request.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment.prod';
import {getFormValue,putFormValue,hideElment} from 'src/app/core/models/FORM';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
declare var GetElement:any;
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
  @Input() columns: Array<any[]>;
  @Input() inputs: any[];
  @Input() data: Array<any[]>;
  @Input() title: Array<any[]>;
  @Input() btns: any={delete:true,update:true};
  @Input() titleHeader: string;
  @Input() routerName: string;
  @Input() addTitle: string;
  @Input() editTitle: string;
  @Input() deleteTitle: string;
  @Input() ModelType: string;
  @Input() OnEvent: any[];
  @Input() printModal: false;

  @Output() OnEvent3: EventEmitter<any> = new EventEmitter();
  


  typeFiles:[];
  fabricZ:any;
  isLoading:boolean=false;
  //form
  TitleForm:string="إضافة سجل";
  typeForm:number=0;
  idForm=-1;
  formLoading:boolean=false;
  UPLOADPATH=environment.server+"/";

  limit=10;
  offset=1;
  pageSize:any[]=[];
  footerTable:string="";
  search:string="";
  CountRow=0;
  constructor(private request:RequestService,private modalService: NgbModal,private http:HttpClient,private tost:ToastrService) {
  }

  gallerys:{}={};
  fileList:{}={};
  images:{}={};
  selects:{}={};
  texts:{}={};
  tellElement:{}={};
  editorC:{}={};
  emails:{}={};
  dates:{}={};
  times:{}={};
  ngOnInit() {
    this.getAll();
    this.createElement();
    this.OnEvent.forEach(res=>{
      if(res.name=="modal")
      {
        this.eventModel.push(res);
      }

    });
    

  }
    /*
    {label:"الأسم الأول",name:"firstName",type:"text",length:20,required:true,col:12,error:"البريد الإلكتروني غير صحيح"},
    {label:"الأسم الثاني",name:"lastName",type:"text",length:20,required:true,col:12,error:"البريد الإلكتروني غير صحيح"},
    {label:"البريد الإلكتروني",name:"email",type:"email",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح"},
    {label:"مستند كتابي",name:"notes",type:"edit",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح"},
    {label:"الدور",name:"role",type:"select",length:null,required:true,options:[
      {label:"ADMIN",value:1},
      {label:"LIMIT",value:2},
    ],col:12,error:"البريد الإلكتروني غير صحيح"},
    {label:"رقم الهاتف",name:"phone",type:"phone",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح"},
    {label:"الصور",name:"gal",type:"gallery",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح"},
    {label:"صورة",name:"image",type:"image",length:null,required:true,col:12},
    {label:"ملف المستنات",name:"file",type:"file",length:null,required:true,col:12,error:"البريد الإلكتروني غير صحيح",typeFiles:[".pdf"]},
    {label:"التاريخ",name:"date",type:"date",length:null,required:true,col:6,error:"البريد الإلكتروني غير صحيح"},
    {label:"الوقت",name:"time",type:"time",length:null,required:true,col:6,error:"البريد الإلكتروني غير صحيح"},
  */
  createElement(){
    let galleryTemp=this.inputs.filter(x=>x.type=="gallery");
    for(var i=0;i<galleryTemp.length;i++)
    {
      this.gallerys[galleryTemp[i].name]=[];
    }
    let fileTemp=this.inputs.filter(x=>x.type=="file");
    for(var i=0;i<fileTemp.length;i++)
    {
      this.fileList[fileTemp[i].name]=[];
    }
    let imageTemp=this.inputs.filter(x=>x.type=="image");
    for(var i=0;i<imageTemp.length;i++)
    {
      this.images[imageTemp[i].name]=imageTemp[i].defult;
    }
    let editTemp=this.inputs.filter(x=>x.type=="edit");
    for(var i=0;i<editTemp.length;i++)
    {
      this.editorC[editTemp[i].name]={edit:null,value:""};
    }
    let tellTemp=this.inputs.filter(x=>x.type=="phone");
    for(var i=0;i<tellTemp.length;i++)
    {
      this.tellElement[tellTemp[i].name]={tell:null,value:""};
    }
    let selectTemp=this.inputs.filter(x=>x.type=="select");
    for(var i=0;i<selectTemp.length;i++)
    {
      this.selects[selectTemp[i].name]={select:null,value:""};
    }
    let textTemp=this.inputs.filter(x=>x.type=="text");
    for(var i=0;i<textTemp.length;i++)
    {
      this.texts[textTemp[i].name]={text:null,value:""};
    }
    let emailTemp=this.inputs.filter(x=>x.type=="email");
    for(var i=0;i<emailTemp.length;i++)
    {
      this.emails[emailTemp[i].name]={text:null,value:""};
    }
    let dateTemp=this.inputs.filter(x=>x.type=="date");
    for(var i=0;i<dateTemp.length;i++)
    {
      this.dates[dateTemp[i].name]={date:null,value:""};
    }
    let timeTemp=this.inputs.filter(x=>x.type=="time");
    for(var i=0;i<timeTemp.length;i++)
    {
      this.times[timeTemp[i].name]={time:null,value:""};
    }
    
  }


  getAll(){
    this.footerTable="Loading ...";
    this.request.getAll(this.routerName,{limit:this.limit,offset:this.offset,search:this.search}).subscribe(res=>{
      if(res.error==0)
      {
        if(res.data.length!=0)
        {
          this.data=res.data;
          this.CountRow=(<any>this.data[0]).COUNT;
          this.countTable(this.CountRow,this.data.length);
        }
        else{
          this.data=res.data;
          this.countTable(0);
        }
      }
    });
  }
  countTable(COUNT,countArray=0){
    if(COUNT==0)
    {
      this.pageSize=[];
      this.footerTable="لايوجد سجلات للعرض";
      return;
    }
    var size
    let pagesSize=COUNT/this.limit;
    this.pageSize=[];
    if(pagesSize.toString().split('.').length==2)
    {
      size=parseInt(pagesSize.toString().split('.')[0])+1;
    }
    else{
      size=pagesSize;
    }
    this.footerTable="إظهار "+(this.offset==1?'1':((this.offset-1)*this.limit)+1)+" إلى "+(size==1?COUNT:((this.offset-1)*this.limit)+countArray)+" من "+COUNT+" السجلات";
    if(size==1 || this.offset==1)
    {
      this.pageSize.push({html:"<i class='fe-arrow-left'></i>",disabled:true,active:false,extends:"left"});
    }
    else{
      this.pageSize.push({html:"<i class='fe-arrow-left'></i>",disabled:false,active:false,extends:"left"});
    }
    if(size==1)
    {
      this.pageSize.push({html:1,disabled:true,active:true,extends:"number"});
    }
    else if(size==2)
    {
      if(this.offset==size)
      {
        this.pageSize.push({html:1,disabled:false,active:false,extends:"number"});
        this.pageSize.push({html:2,disabled:true,active:true,extends:"number"});
      }
      else{
        this.pageSize.push({html:1,disabled:true,active:true,extends:"number"});
        this.pageSize.push({html:2,disabled:false,active:false,extends:"number"});
      }
    }
    else if(size==3){
      if(this.offset==size)
      {
        this.pageSize.push({html:1,disabled:false,active:false,extends:"number"});
        this.pageSize.push({html:2,disabled:false,active:false,extends:"number"});
        this.pageSize.push({html:3,disabled:true,active:true,extends:"number"});
      }
      else if(this.offset==1){
        this.pageSize.push({html:1,disabled:true,active:true,extends:"number"});
        this.pageSize.push({html:2,disabled:false,active:false,extends:"number"});
        this.pageSize.push({html:3,disabled:false,active:false,extends:"number"});
      }
      else{
        this.pageSize.push({html:1,disabled:false,active:false,extends:"number"});
        this.pageSize.push({html:2,disabled:true,active:true,extends:"number"});
        this.pageSize.push({html:3,disabled:false,active:false,extends:"number"});
      }
    }
    else{
      if(this.offset==size)
      {
        this.pageSize.push({html:this.offset-1,disabled:false,active:false,extends:"number"});
        this.pageSize.push({html:this.offset,disabled:true,active:true,extends:"number"});
      }
      else if(this.offset==1){
        this.pageSize.push({html:1,disabled:true,active:true,extends:"number"});
        this.pageSize.push({html:2,disabled:false,active:false,extends:"number"});
      }
      else{
        this.pageSize.push({html:this.offset-1,disabled:false,active:false,extends:"number"});
        this.pageSize.push({html:this.offset,disabled:true,active:true,extends:"number"});
        this.pageSize.push({html:this.offset+1,disabled:false,active:false,extends:"number"});
      }
    }
    if(size==this.offset)
    {
      this.pageSize.push({html:"<i class='fe-arrow-right'></i>",disabled:true,active:false,extends:"right"});
    }
    else{
      this.pageSize.push({html:"<i class='fe-arrow-right'></i>",disabled:false,active:false,extends:"right"});
    }
  }
  changeOffset(page:any){
    if(page.extends=="number")
    {
      this.offset=page.html;
    }
    else if(page.extends=="left")
    {
      this.offset--;
    }
    else if(page.extends=="right")
    {
      this.offset++;
    }
    this.getAll();
  }
  changeLimit(event:any){
    this.limit=event.target.value;
    this.offset=1;
    this.getAll();
  }
  seachTable(searchTerm){
    this.offset=1;
    this.search=searchTerm;
    this.getAll();
  }



  editor:any;

  editorValue:any=false;
  modelOpen:any;
  getEditor(e)
  {
    this.editorC[e.name]={edit:e.edit,value:""};
  }
  removeImageGaleery(name,index,type){
    if(type=="file")
    {
      this.fileList[name].splice(index,1);
    }
    else if(type=="gallery"){
      this.gallerys[name].splice(index,1);
    }
    
  }

  selectImagePath(path){
    path=path.split('//').join('/');
    path=path.split('///').join('/');
    if(this.type=="edit")
    {
      if(this.editorC[this.nameElementSlectImage])
      {
        this.editorC[this.nameElementSlectImage].edit.insertHtml( "<img src='"+this.UPLOADPATH+path+"'>" );
        this.modelOpen.close();
      }
    }
    else if(this.type=="gallery")
    {
      this.gallerys[this.nameElementSlectImage].push(path);
      this.modelOpen.close();
    }
    else if(this.type=="file")
    {
      if(this.fileList[this.nameElementSlectImage].length==this.inputs.find(x=>x.name==this.nameElementSlectImage).lengthFile){
        alert("لا يمكن إضافة اكثر من ملف واحد لإضافة هذا الملف يرجى حذف الملف اولاً");
        this.modelOpen.close();
        return;
      }
      this.fileList[this.nameElementSlectImage].push(path);
      this.modelOpen.close();
    }
    else if(this.type=="image")
    {
      this.images[this.nameElementSlectImage]=path;
      this.modelOpen.close();
    }
    
  }
  @ViewChild("modelFileManager",{static:true})  modelFileManager:TemplateRef<any>;

  type:string="";
  nameElementSlectImage:string="";
  editImage(type,name){
    if(type=="file")
    {
      this.typeFiles=this.inputs.find(x=>x.name==name).typeFiles;
    }
    else{
      this.typeFiles=null;
    }
    this.type=type;
    this.nameElementSlectImage=name;
   this.modelOpen=this.modalService.open(this.modelFileManager,{windowClass: 'modal-full kFileManager',backdropClass:'kFileManagerback'});
  }
  //crud

  create(){
    let Form=<[any]>getFormValue(document.querySelectorAll("[kform]"),true);
    if(Form)
    {
      let galleryTemp=this.inputs.filter(x=>x.type=="gallery");
      for(var i=0;i<galleryTemp.length;i++)
      {
        Form[galleryTemp[i].name]=this.gallerys[galleryTemp[i].name];
      }
      let fileTemp=this.inputs.filter(x=>x.type=="file");
      for(var i=0;i<fileTemp.length;i++)
      {
        Form[fileTemp[i].name]=this.fileList[fileTemp[i].name];
      }
      let imageTemp=this.inputs.filter(x=>x.type=="image");
      for(var i=0;i<imageTemp.length;i++)
      {
        Form[imageTemp[i].name]=this.images[imageTemp[i].name];
      }

      let tellTemp=this.inputs.filter(x=>x.type=="phone");
      for(var i=0;i<tellTemp.length;i++)
      {
        Form[tellTemp[i].name]=this.tellElement[tellTemp[i].name].tell.getNumber();
      }

      let editTemp=this.inputs.filter(x=>x.type=="edit");
      for(var i=0;i<editTemp.length;i++)
      {
        Form[editTemp[i].name]=this.editorC[editTemp[i].name].edit.getData();
      }
      
      this.formLoading=true;
       this.http.post<any>(environment.server+"/"+this.routerName+"/Create",Form).subscribe(res=>{
         if(res.message==2000)
         {
           this.getAll();
           this.CloseModel();
           if(this.eventModel.length != 0)
           {
            this.eventModel.forEach(resul=>{
              if(resul.nameEevent=="affterCreate")
              {
                resul.fun(res);
              }
            })
           }
           this.tost.success("تم إضافة السجل", "تم" ,{
             timeOut :  3000
           });
         }
         this.formLoading=false; 
       },err=>{
         if(err==1001)
         {
           this.tost.warning("يوجد سجلات متشابهة", "تحذير" ,{
             timeOut :  3000
           });
         }
         this.formLoading=false;
       });
    }
   }
   phoneEDit:boolean=true;
   eventModel:any[]=[];
   EditModel(id,model){
     if(this.eventModel.length != 0)
     {
      this.eventModel.forEach(resul=>{
        if(resul.nameEevent=="befforShowModel")
        {
          resul.fun(id);
        }
      })
     }
     this.TitleForm="تعديل السجل";
     this.typeForm=1;
     this.modalService.open(model,{ backdrop : 'static',keyboard : false,windowClass:(this.ModelType=="full"?'modal-full':"")});
     this.formLoading=true;
     this.phoneEDit=false;
     this.http.post<any>(environment.server+"/"+this.routerName+"/GetId",{id:id}).subscribe(res=>{
       if(res.error==0)
       {
          putFormValue(document.querySelectorAll("[kform]"),res.data);


         let galleryTemp=this.inputs.filter(x=>x.type=="gallery");
         for(var i=0;i<galleryTemp.length;i++)
         {
           this.gallerys[galleryTemp[i].name]=JSON.parse(res.data[galleryTemp[i].name]);
         }
         let fileTemp=this.inputs.filter(x=>x.type=="file");
         for(var i=0;i<fileTemp.length;i++)
         {
           this.fileList[fileTemp[i].name]=JSON.parse(res.data[fileTemp[i].name]);
         }
         let imageTemp=this.inputs.filter(x=>x.type=="image");
         for(var i=0;i<imageTemp.length;i++)
         {
           this.images[imageTemp[i].name]=res.data[imageTemp[i].name];
         }
   
         let tellTemp=this.inputs.filter(x=>x.type=="phone");
         for(var i=0;i<tellTemp.length;i++)
         {
           this.tellElement[tellTemp[i].name].tell.setNumber(res.data[tellTemp[i].name]);
         }
         let editTemp=this.inputs.filter(x=>x.type=="edit");
         for(var i=0;i<editTemp.length;i++)
         {
           this.editorC[editTemp[i].name].value=res.data[editTemp[i].name];
         }

         let selectTemp=this.inputs.filter(x=>x.type=="select");
         for(var i=0;i<selectTemp.length;i++)
         {
           this.selects[selectTemp[i].name].value=res.data[selectTemp[i].name];
         }
         this.idForm=res.data.id;
         if(this.eventModel.length != 0)
         {
          this.eventModel.forEach(resul=>{
            if(resul.nameEevent=="afterShowModel")
            {
              resul.fun(res);
            }
          })
         }
       }
       this.phoneEDit=true;
       this.formLoading=false;
     });
   }

   loadEevent(){
    if(this.eventModel.length != 0)
    {
     this.eventModel.forEach(resul=>{
       if(resul.nameEevent=="loadShowModel")
       {
         resul.fun(this.typeForm);
       }
     })
    }
    this.OnEvent.forEach(res=>{
      if(res.name!="modal")
      {
        document.querySelector("[name='"+res.name+"']").addEventListener(res.nameEevent,(e)=>{
          res.fun(e);
        });
      }

    })

   }
   update(){
     let Form=<[any]>getFormValue(document.querySelectorAll("[kform]"),true);
     if(Form)
     {
      let galleryTemp=this.inputs.filter(x=>x.type=="gallery");
      for(var i=0;i<galleryTemp.length;i++)
      {
        Form[galleryTemp[i].name]=this.gallerys[galleryTemp[i].name];
      }
      let fileTemp=this.inputs.filter(x=>x.type=="file");
      for(var i=0;i<fileTemp.length;i++)
      {
        Form[fileTemp[i].name]=this.fileList[fileTemp[i].name];
      }
      let imageTemp=this.inputs.filter(x=>x.type=="image");
      for(var i=0;i<imageTemp.length;i++)
      {
        Form[imageTemp[i].name]=this.images[imageTemp[i].name];
      }

      let tellTemp=this.inputs.filter(x=>x.type=="tell");
      for(var i=0;i<tellTemp.length;i++)
      {
        Form[tellTemp[i].name]=this.tellElement[tellTemp[i].name].tell.getNumber();
      }

      let editTemp=this.inputs.filter(x=>x.type=="edit");
      for(var i=0;i<editTemp.length;i++)
      {
        Form[editTemp[i].name]=this.editorC[editTemp[i].name].edit.getData();
      }
       Form["id"]=this.idForm;
       this.formLoading=true;
        this.http.post<any>(environment.server+"/"+this.routerName+"/Update",Form).subscribe(res=>{
          if(res.message==2001)
          {
            this.getAll();
            this.CloseModel();
            this.tost.success("تم تحديث السجل بنجاح", "تم" ,{
              timeOut :  3000
            });
            
          }
          this.formLoading=false; 
        },err=>{
          if(err==1001)
          {
            this.tost.warning("يوجد سجلات متشابهة", "تحذير" ,{
              timeOut :  3000
            });
          }
          this.formLoading=false;
        });
     }
    }
 
    showModel(model){
      this.modalService.open(model,{ backdrop : 'static',keyboard : false,windowClass:(this.ModelType=="full"?'modal-full':"")});
    }
    CloseModel(){
      this.typeForm=0;
      this.modalService.dismissAll();
    }
    AddModel(model){
      this.TitleForm="إضافة سجل";
      this.typeForm=0;
      this.createElement();
      this.showModel(model);  
    }

    PrintModel(model){

    }


    setTell(event)
    {
      this.tellElement[event.name]={tell:event.tell,value:""};
    }
    Delete(id): Promise<any>{
     let promise = new Promise((resolve, reject) => {
       this.http.post<any>(environment.server+"/"+this.routerName+"/Delete",{id:id}).subscribe(res=>{
         if(res.message==2002)
         {
           this.getAll();
           resolve(true);
         }
         else{
           reject(true);
         }
 
       },err=>{
         reject(err);
       });
     });
     return promise;
    }
    DeleteModel(id){
     Swal.queue([{
       title: 'هل انت متاكد ؟',
       text: 'إذا تم حذف السجل الحالي لايمكنك الرجوع عن الأمر',
       type: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       confirmButtonText: 'نعم انا متأكد',
       cancelButtonText: 'إلغاء الأمر',
       showLoaderOnConfirm: true,
         preConfirm: () => {
           return this.Delete(id).then(data => Swal.fire('حذف!', 'تم حذف السجل', 'success')).catch(data=>Swal.insertQueueStep({
             type: 'error',
             title: data
         }));
         }
     }]);
   }
 
   Status(event,id){
     var status=0;
     if(event)
     {
       status=1;
     }
     this.http.post<any>(environment.server+"/"+this.routerName+"/Status",{id:id,Status:status}).subscribe(res=>{
       if(res.message==2001)
       {
         this.tost.success((status==1?'تم تفعيل السجل':'تم إيقاف السجل'), "تم" ,{
           timeOut :  3000
         });
       }
       else{
 
       }
 
     },err=>{
 
     });
   }
   maps:[]=[];
   projects:any[]=[];
   EditModelMap(id,model,project){
     this.idMap=id;
     this.projects=project;
     this.http.post<any>(environment.server+"/"+this.routerName+"/getAllMap",{projectId:id}).subscribe(res=>{
       this.maps=res.data;
       this.modalService.open(model,{ backdrop : 'static',keyboard : false,windowClass:'modal-full'});
     });
 

   }

   setFabricZ(event){
     this.fabricZ=event;
   }
   /*
        pieceName:{
        pieceId: {
        left: {
        top: {
        width: {
        height: {
        angle: {
   */
  idMap:number=0;
  mapLoading:boolean=false;
   saveMap(){
     let opejects=this.fabricZ.getObjects();
     let maps:any[]=[];
     for(var i=0;i<opejects.length;i++)
     {
       if(opejects[i].peiceSpace!=undefined)
       {
         maps.push(
           {
             projectId:this.idMap,
             pieceName:opejects[i].pieceName,
             pieceId:opejects[i].pieceId,
             left:opejects[i].left,
             top:opejects[i].top,
             width:opejects[i].kwidth,
             height:opejects[i].kheight,
             angle:opejects[i].angle,
             peiceSpace:opejects[i].peiceSpace,
             points:opejects[i].points,
            });
       }
     }
     this.mapLoading=true;
     this.http.post<any>(environment.server+"/"+this.routerName+"/updateM",{maps:maps}).subscribe(res=>{
       if(res.error==0)
       {
         this.tost.success("تم الحفظ بنجاح","تم الحفظ");
       }
       else{
        this.tost.error("خطأ في النظام يرجى مراجعة المسوؤل ","خطأ ");
       }
      this.mapLoading=false;
     });
     console.log("test opjects");
     console.log(maps);
   }



   Printer(id){
    this.http.post<any>(environment.server+"/"+this.routerName+"/getPdf",{id:id}).subscribe(res=>{
      if(res.error==0)
      {
        this.downloadFile(res.data);
      }
      else{
       this.tost.error("خطأ في النظام يرجى مراجعة المسوؤل ","خطأ ");
      }
    });
    
   }
   downloadFile(data: any) {
    window.open(environment.server+"/" + data, '_blank');
  }



  showId(modelIdCard,data){
    this.modalService.open(modelIdCard,{ backdrop : 'static',keyboard : false,windowClass:'modal-full'});
  }
}

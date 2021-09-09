import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output ,EventEmitter, ViewChild, TemplateRef} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { getFormValue, putFormValue } from 'src/app/core/models/FORM';
import { RequestService } from 'src/app/core/services/request/request.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.scss']
})
export class ViewFormComponent implements OnInit {
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
  constructor(private request:RequestService,private modalService: NgbModal,private http:HttpClient,private tost:ToastrService) { }

  ngOnInit() {
    this.createElement();
    this.EditModel(1,null);
  }
  gallerys:{}={};
  fileList:{}={};
  images:{}={};
  editorC:{}={};
  tellElement:{}={};
  editorValue:any=false;
  modelOpen:any;
  @ViewChild("modelFileManager",{static:true})  modelFileManager:TemplateRef<any>;

  type:string="";
  nameElementSlectImage:string="";
  UPLOADPATH=environment.server+"/";
  phoneEDit:boolean=true;
  TitleForm:string="إضافة سجل";
  typeForm:number=0;
  idForm=-1;
  formLoading:boolean=false;
  typeFiles:[];
  isLoading:boolean=false;
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
    
  }

  setTell(event)
  {
    this.tellElement[event.name]={tell:event.tell,value:""};
  }

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

  //editForm

  EditModel(id,model){
    this.TitleForm="تعديل السجل";
    this.typeForm=1;
    //this.modalService.open(model,{ backdrop : 'static',keyboard : false,windowClass:(this.ModelType=="full"?'modal-full':"")});
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
          this.tellElement[tellTemp[i].name].value=res.data[tellTemp[i].name];
        }
  
        let editTemp=this.inputs.filter(x=>x.type=="edit");
        for(var i=0;i<editTemp.length;i++)
        {
          this.editorC[editTemp[i].name].value=res.data[editTemp[i].name];
        }

        this.idForm=res.data.id;
      }
      this.phoneEDit=true;
      this.formLoading=false;
    });
  }

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


   //for event
   loadEevent(){
    // document.querySelector("[name='"+this.OnEvent[0].name+"']").addEventListener(this.OnEvent[0].nameEevent,(e)=>{
    //   this.OnEvent[0].fun(e);
    //  });
   }
}

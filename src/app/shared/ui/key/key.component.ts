import { Component, Input, OnInit, Output, TemplateRef, ViewChild,EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {

  htmlContent:any;
  @ViewChild("modelFileManager",{static:true})  modelFileManager:TemplateRef<any>;
  @ViewChild("modelAddElements",{static:true})  modelAddElements:TemplateRef<any>;
  @ViewChild("divCode",{static:false})  divCode:any;

  @Input() valueKey: Observable<any[]>;
  @Output() saveElements: EventEmitter<any[]> = new EventEmitter();
  idTemp:string="";
  serverPath:string=environment.server;
  editor:any;
  typeElement:string="";

  Elements:{id:string,name:string,type:string,value:any,TLENEGTH:number}[]=[];

  modelOpen:any;
  constructor(private model:NgbModal) {

   }
  selectImagePath(path)
  {
    if(this.typeElement=='CONTENT')
    {
      this.editor.insertHtml( "<img src='"+this.serverPath+"/"+path+"'>" );
      this.modelOpen.close();
    }
    else if(this.typeElement=='IMAGE'){
      //this.idTemp this.serverPath+"/"+path
      this.Elements.find(x=>x.id==this.idTemp).value=path;
      this.modelOpen.close();
    }
    else if(this.typeElement=='GALLERY')
    {
      this.Elements.find(x=>x.id==this.idTemp).value.push(path);
      this.modelOpen.close();
    }

  }

  ngOnInit() {

    this.valueKey.subscribe(res=>{
      this.Elements=res;
    });
  }

  changeValueTEXT(e,id){
    this.Elements.find(x=>x.id==id).value=e.target.value;
  }

  keypress(e){
    var regex = new RegExp("^[a-zA-Z0-9 ]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
      if(str==" ")
      {
        e.preventDefault();
        return false;
      }
      return true;
    }
    else{
      e.preventDefault();
      return false;
    }

  }
  changeValueId(event){
    var strTemp="";
    for(var i=0;i<event.target.value.length;i++)
    {
      let e=event.target.value[i];
      var regex = new RegExp("^[a-zA-Z0-9 ]+$");
      var str = e;
      if (regex.test(str)) {
        if(str!=" ")
        {
          strTemp+=e;
        }
      }
    }
    event.target.value=strTemp;
  }
  removeImage(id,index){
    this.Elements.find(x=>x.id==id).value.splice(index,1);
  }
  editImage(e,type){
    this.typeElement=type;
    this.editor=e;
    this.modelOpen=this.model.open(this.modelFileManager,{windowClass: 'modal-full kFileManager',backdropClass:'kFileManagerback'});
  }
  clickElement(type,id){
    if(type=="IMAGE")
    {
      this.typeElement=type;
      this.idTemp=id;
      this.modelOpen=this.model.open(this.modelFileManager,{windowClass: 'modal-full kFileManager',backdropClass:'kFileManagerback'});
    }
    else if(type=="GALLERY")
    {
      this.typeElement=type;
      this.idTemp=id;
      this.modelOpen=this.model.open(this.modelFileManager,{windowClass: 'modal-full kFileManager',backdropClass:'kFileManagerback'});
    }
  }
  saveElament(){
    this.saveElements.emit(this.Elements);
  }
  changeValueCode(e,id){
    this.Elements.find(x=>x.id==id).value=e;
  }
  changeValueContent(e){
    this.Elements.find(x=>x.id==e.id).value=e.value;
  }
  showModelAddElement(model){
   this.modelOpen=this.model.open(model,{ backdrop : 'static',keyboard : false,windowClass: 'kFileManager',backdropClass:'kFileManagerback'});
  }
  CreateElemen(id,name,type,length){
    if(this.Elements.find(x=>x.id==id.value))
    {
      id.style.border="1px dashed red";
    }
    else{
      if(type=="IMAGE")
      {
        this.Elements.push({id:id.value,name:name,type:type,value:"uploads/defult/defultImage.png",TLENEGTH:length});
        this.modelOpen.close();
      }
      else if(type=="GALLERY"){
        this.Elements.push({id:id.value,name:name,type:type,value:[],TLENEGTH:length});
        this.modelOpen.close();
      }
      else{
        this.Elements.push({id:id.value,name:name,type:type,value:"",TLENEGTH:length});
        this.modelOpen.close();
      }

    }


  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {
  @Input() title: string;
  @Input() color: string;
  @Input() text: string;
  @Input() headerClass: string;
  @Input() typeFiles: [];
  
  // tslint:disable-next-line: no-output-on-prefix
  @Output() selectImage: EventEmitter<string> = new EventEmitter();

  isLoading: boolean;
  isVisible: boolean;
  isCollapsed: boolean;


  //file Manager Paramter
  serverPath=environment.server;
  fileFolder:any[]=[];
  idImage=6;
  direction:string="/";
  tempFile:any;
  constructor(private http:HttpClient) { }

  
  ngOnInit() {
    // set the value
    this.isCollapsed = false;
    this.isLoading = false;
    this.isVisible = true;
    this.getAllFile();

  }
  getAllFile(){
    this.isLoading=true;
    this.http.post<any>(environment.server+"/fileManager/GetAll",{directionName:this.direction,typeFiles:this.typeFiles}).subscribe(res=>{
      this.fileFolder=res.data;
      this.isLoading=false;
    });
  }
  refreshContent() {
    this.getAllFile();
  }
  remove() {
    this.isVisible = false;
  }
  contextmenu(e,file){
    this.tempFile=file;
    (<any>document.querySelector("#fccmkiven")).style.display="block";
    document.getElementById("contextMenu").style.top=e.y+"px";
    document.getElementById("contextMenu").style.left=e.x+"px";
    e.preventDefault();
  }
  fullCardContextMenu(e){
    var top =parseInt(document.getElementById("contextMenu").style.top.split("px")[0]);
    var left =parseInt(document.getElementById("contextMenu").style.left.split("px")[0]);
    var bottpm=top+document.getElementById("contextMenu").offsetHeight;
    var rigth=left+document.getElementById("contextMenu").offsetWidth;
    if(top > e.y || left > e.x || bottpm < e.y || rigth < e.x)
    {
      (<any>document.querySelector("#fccmkiven")).style.display="none";
    }

  }

  clickFile(path,type,nameFile=""){
    if(type==0)
    {
      this.selectImage.emit(path);
    }
    else{
      if(this.direction.split("/")[this.direction.split("/").length-1] != "")
      {
        this.direction=this.direction+"/"+nameFile;
      }
      else{
        this.direction=this.direction+nameFile;
      }

      this.getAllFile();
    }

  }

  showModelCreateFloder(e:any){
    e.parentNode.parentNode.style.display="block";
  }
  createFile(e:any){
    this.isLoading=true;
    this.http.post<any>(environment.server+"/fileManager/CF",{direction:this.direction+"/"+e.value}).subscribe(res=>{
      if(res.data==200)
      {
        e.parentNode.parentNode.style.display="none";
        this.isLoading=false;
        e.value="";
        this.getAllFile();
       
      }
      else if(res.data==201){
        alert("الملف موجود مسبقا ");
        this.isLoading=false;
      }
    });
  }
  cancel(e:any){
    e.value="";
    e.parentNode.parentNode.style.display="none";
  }

  deleteFile(){
    (<any>document.querySelector("#fccmkiven")).style.display="none";
    var path=this.tempFile.path;
    if(this.tempFile.type==0)
    {
      if(confirm("عند حذف هذا الملف لن تتمكن من إسترجاعه")){
        this.StartDeleteFile(this.tempFile.path);
      }
    }
    else{
      if(confirm("عند حذف هذا مجلد "+this.tempFile.nameFile+" لن تتمكن من إسترجاعه وسيتم حذف جميع البيانات التي بداخله")){
        this.StartDeleteFile(this.tempFile.path);
      }
    }
  }
  StartDeleteFile(path){
    this.http.post<any>(environment.server+"/fileManager/DF",{direction:path}).subscribe(res=>{
      if(res.data==200)
      {
        this.getAllFile();
      }
      else if(res.data==400)
      {
        alert("أحذف البيانات من داخ المجلد أولاً");
      }
    })
  }
  backFile(){
    if(this.direction.split("/")[this.direction.split("/").length-1] != "")
    {
      this.direction=this.direction.replace("/"+this.direction.split("/")[this.direction.split("/").length-1],"");
      if(this.direction=="")
      {
        this.direction="/";
      }
      this.getAllFile();
    }
  }
  dropped(files: NgxFileDropEntry[]){
    for (const droppedFile of files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        const reader = new FileReader();
        fileEntry.file((file: File) => {
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.idImage++;
            this.fileFolder.push({id:this.idImage,type:0,nameFile:file.name,path:reader.result,upload:1,uploadNumber:'0'});
            this.startUpload(this.idImage,file);
          };
        });
      }
    }
  }
  startUpload(id,file:File){
    var forma=new FormData();
    forma.append("fileData",file);
    this.http.post(environment.server+"/fileManager/uploadFile",forma,{params:{directionName:this.direction},reportProgress: true, observe: 'events'}).subscribe(resp=>{
      if (resp.type === HttpEventType.Response) {
        this.fileFolder.find(x=>x.id==id).upload=0;
       this.fileFolder.find(x=>x.id==id).path=resp.body;
       console.log(resp.body);
    }
    if (resp.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round(100 * resp.loaded / resp.total);
        this.fileFolder.find(x=>x.id==id).uploadNumber=percentDone;
    }
      // if(res)
      // {
      //   this.getAllFile();
      // }
    });
    
    // setTimeout(() => {
    //   if(this.fileFolder.find(x=>x.id==id).uploadNumber <= 100)
    //   {
    //     this.fileFolder.find(x=>x.id==id).uploadNumber++;
    //     this.startUpload(id);
    //   }
    //   else if(this.fileFolder.find(x=>x.id==id).uploadNumber > 100 && this.fileFolder.find(x=>x.id==id).uploadNumber < 120)
    //   {
    //     this.fileFolder.find(x=>x.id==id).upload=2;
    //     this.fileFolder.find(x=>x.id==id).uploadNumber++;
    //     this.startUpload(id);
    //   }
    //   else if(this.fileFolder.find(x=>x.id==id).uploadNumber > 119 ){
    //     this.fileFolder.find(x=>x.id==id).upload=0;
    //   }

    // }, 30);
  }
  fileOver(){
   
  }
  fileLeave(){

  }
  clickFileStl(){

  }
}

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';

declare var canvas: any;
declare var startMap: any;
declare var addBlock: any;
@Component({
  selector: 'app-maps-project',
  templateUrl: './maps-project.component.html',
  styleUrls: ['./maps-project.component.scss']
})
export class MapsProjectComponent implements OnInit {


  @Input() opjectArray: any[];  
  @Input() projects: any;
  @Input() editMod: any=1;
  @Output() fabricZ: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: NgbModal, private http: HttpClient, private tost: ToastrService) { }

  ngOnInit() {
    let url="";
    if(this.projects.maps)
    {
      if(this.projects.maps.length)
      {
        url=JSON.parse(this.projects.maps)[0];
      }
    }
    startMap('c',environment.server+"/"+url,this.editMod,(canvas)=>{
      this.opjectArray.forEach(res=>{
        this.addBlock(res.pieceName,res.pieceId,res.peiceSpace,res.points,res.left,res.top,res.countpieces,res.countsConstract,(e)=>{
          
        });
      });
      this.fabricZ.emit(canvas);
    });
  }

  addBlock(pieceName,pieceId,peiceSpace,poent,left=100,top=50,color,color1,fun){
    addBlock(pieceName,pieceId,peiceSpace,poent,left,top,color,color1,fun);
  }

  showModel(model) {
    this.modalService.open(model, { backdrop: 'static', keyboard: false });
  }
}

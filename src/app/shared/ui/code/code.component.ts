import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
declare var require:any;
declare var monaco:any;
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @Input("IDCODE") IDCODE:string;
  @Input("VALUECODE") VALUECODE:string;
  
  @Output() changeValue: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  //  style="width: 100%;height: 300px;text-align: left;"
   var div=document.createElement('div');
   div.style.width="100%";
   div.style.height="300px";
   div.style.textAlign="left";
   div.id=this.IDCODE;
  setTimeout(() => {
    let element=document.querySelectorAll("app-code");
    for(var i=0;i<element.length;i++)
    {
      if(element[i].id==this.IDCODE)
      {
        element[i].appendChild(div);
        let editor = monaco.editor.create(div, {
          value: this.VALUECODE,
          language: 'javascript',
          theme: 'vs-light' 
        });
        
        editor.onDidChangeModelContent(() => {
          this.changeValue.emit(editor.getValue());
        });
      }
    }
  }, 1000);
  }


}

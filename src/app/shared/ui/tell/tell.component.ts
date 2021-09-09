import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tell',
  templateUrl: './tell.component.html',
  styleUrls: ['./tell.component.scss']
})
export class TellComponent implements OnInit {

  @Input() nameStatic: string;
  @Output() tell: EventEmitter<any> = new EventEmitter();
  @Input() valueNumber: any;
  
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.createTell();
  }
  createTell(){
    let input =<any> document.querySelector("#"+this.nameStatic);
    let tell=(<any>window).intlTelInput(input, {
      utilsScript: "./assets/tell/js/utils.js",
    });
    if(this.valueNumber)
    {
      tell.setNumber(this.valueNumber);
    }
    this.tell.emit({name:this.nameStatic,tell:tell});
    

  }
}

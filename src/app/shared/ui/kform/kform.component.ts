import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-kform',
  templateUrl: './kform.component.html',
  styleUrls: ['./kform.component.scss']
})
export class KformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() onLoad: EventEmitter<any> = new EventEmitter();
  ngAfterViewInit(){
    this.onLoad.emit();
  }

}

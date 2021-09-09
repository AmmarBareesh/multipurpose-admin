import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.scss']
})
export class TabelComponent implements OnInit {


  @Input() columns: [];
  @Input() data: [];
  constructor() { 

  }


  ngOnInit() {
  }

}

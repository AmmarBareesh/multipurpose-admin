import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
declare var $:any;
declare var MenuEditor:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  MenuList:any[];
  @Input("VALUE") VALUE:JSON;
  @Input("ID") ID:JSON;
  @Output() changeValue: EventEmitter<any> = new EventEmitter();
  menuEditorstatic:any;
  constructor() { }

  ngOnInit() {
    var options = {
      hintCss: {'border': '1px dashed #13981D'},
      placeholderCss: {'background-color': 'gray'},
      ignoreClass: 'btn',
      opener: {
          active: true,
          as: 'html',
          close: '<i class="fa fa-minus"></i>',
          open: '<i class="fa fa-plus"></i>',
          openerCss: {'margin-right': '10px'},
          openerClass: 'btn btn-success btn-xs'
      }
  };
  let dataInter='[{"icon":"","text":"ASDASD","href":"ASDASD","target":"_blank","title":"asda","children":[{"icon":"","text":"ASDA","href":"ASDASD","target":"_blank","title":"ASDASD"}]},{"icon":"","text":"ASDA","href":"ASDAS","target":"_blank","title":"ASDASD"}]';
  console.log(JSON.parse(dataInter));
  this.menuEditorstatic=MenuEditor('myList', {listOptions: options, labelEdit: 'Edit', labelRemove: 'X'});
  this.menuEditorstatic.setData(dataInter);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-and-statement',
  templateUrl: './tab-and-statement.component.html',
  styleUrls: ['./tab-and-statement.component.scss']
})
export class TabAndStatementComponent implements OnInit {

  columns = [
    { label: "اسم التبويب والبيان", name: "name", type: "text", id: 'id' },
    { label: " تاريخ اضافة ", name: "addDate", type: "date", id: 'id' },
    { label: "رقم التبويب والبيان", name: "tabNumber", type: "text", id: 'id' },
    { label: "الحالة", name: "status", type: "switsh", id: 'id' },
    { label: "أوامر", name: "btn", type: "btn", id: 'id' },
  ];

  inputs = [

    { label: "اسم التبويب والبيان ", name: "name", type: "text", length: 20, required: true, col: 12, error: "لايمكن ان يكون الحقل فارغ" },

    { label: "رقم التبويب والبيان", name: "tabNumber", type: "text", length: 20, required: true, col: 12, error: "لايمكن ان يكون الحقل فارغ" },
 
    { label: "تاريخ اضافة", name: "addDate", type: "date", length: null, required: true, col: 12, error: "التاريخ مطلوب" },

  ]

  addTitle = "إضافة التبويب والبيان";
  editTitle = "تعديل التبويب والبيان";
  ModelType = "nofull";
  //nameAction
  routerName = "tabsandstatement";

  //title and titleHeader
  title = [
    { label: 'الرئيسية', path: '/' },
    { label: 'الادارة', path: '' },
    { label: 'التبويب والبيان ', path: '/tabsandstatement', active: true },
  ];
  titleHeader = "التبويب والبيان";

  constructor() { }

  ngOnInit() {
  }

}

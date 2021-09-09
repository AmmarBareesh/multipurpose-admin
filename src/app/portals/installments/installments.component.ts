import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installments',
  templateUrl: './installments.component.html',
  styleUrls: ['./installments.component.scss']
})
export class InstallmentsComponent implements OnInit {

  columns = [
    { label: "الاسم", name: "name", type: "text", id: 'id' },
    { label: "تاريخ بداية اول قسط", name: "firstInstallmentDate", type: "date", id: 'id' },
    { label: "نوع القسط", name: "installmentType", type: "text", id: 'id' },
    { label: "تاريخ اخر قسط", name: "lastInstallmentDate", type: "date", id: 'id' },
    { label: "رقم العقد", name: "contractNo", type: "date", id: 'id' },
    { label: "مساحة القطعة", name: "peiceSpace", type: "date", id: 'id' },
    { label: "الحالة", name: "status", type: "switsh", id: 'id' },
    { label: "أوامر", name: "btn", type: "btn", id: 'id' },
  ];

  inputs = [

    { label: "الاسم ", name: "name", type: "text", length: 20, required: true, col: 12, error: "لايمكن ان يكون الحقل فارغ" },
    // NewPortal
    {
      label: "المشروع", name: "project", type: "select", length: null, required: true, options: [
        { label: "المشروع ١", value: 1 },
        { label: "المشروع ٢", value: 2 },
      ], col: 12, error: "لايمكن ان يكون الحقل فارغ"
    },

    { label: "رقم العقد", name: "contractNo", type: "text", length: 20, required: true, col: 12, error: "لايمكن ان يكون الحقل فارغ" },

    { label: "مساحة القطعة", name: "peiceSpace", type: "text", length: 20, required: true, col: 12, error: "لايمكن ان يكون الحقل فارغ" },

    {
      label: "رقم القطعة", name: "pieceNo", type: "select", length: null, required: true, options: [
        { label: "القطعة ١", value: 1 },
        { label: "القطعة ٢", value: 2 },
      ], col: 12, error: "لايمكن ان يكون الحقل فارغ"
    },

    { label: "تاريخ العقد", name: "contractDate", type: "date", length: null, required: true, col: 12, error: "التاريخ مطلوب" },

    { label: "تاريخ بداية اول قسط", name: "firstInstallmentDate", type: "date", length: null, required: true, col: 12, error: "التاريخ مطلوب" },

    {
      label: "نوع القسط", name: "installmentType", type: "select", length: null, required: true, options: [
        { label: "اسبوعي ", value: 1 },
        { label: "شهري ", value: 2 },
        { label: " سنوي", value: 3 },
      ], col: 12, error: "لايمكن ان يكون الحقل فارغ"
    },

    { label: "تاريخ اخر قسط", name: "lastInstallmentDate", type: "date", length: null, required: true, col: 12, error: "التاريخ مطلوب" },

    { label: "رقم الوصل ", name: "receiptNumber", type: "text", length: 20, required: true, col: 12, error: "لايمكن ان يكون الحقل فارغ" },

    { label: "ملاحظات", name: "notes", type: "text", length: 200, required: true, col: 12, error: "التفاصيل مطلوبة" },

  ]

  addTitle = "إضافة القسط";
  editTitle = "تعديل القسط";
  ModelType = "nofull";
  //nameAction
  routerName = "installments";

  //title and titleHeader
  title = [
    { label: 'الرئيسية', path: '/' },
    { label: 'عقود البيع', path: 'contracts' },
    { label: 'الأقساط ', path: '/Contracts/:id', active: true },
  ];
  titleHeader = "الأقساط";

  constructor() {
    console.log(createModele(this.inputs,this.routerName));
    console.log(createModel(this.inputs,this.routerName));
   }

  ngOnInit() {
  }

}
import {createModele,createModel} from 'src/app/core/models/createClass';
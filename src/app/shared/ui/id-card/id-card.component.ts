import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.scss']
})
export class IdCardComponent implements OnInit {

  @Input("data") data:any;
  serverPath=environment.server;
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

  printerId(divName){
   let style=".card{position:relative;height:398px;width:750px;margin:0 auto;background:#ddf1fd;border-radius:4px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.089),0 0 10px rgba(0,0,0,.144),0 2px 10px rgba(0,0,0,.089)}.logo{width:90px;height:90px}.card:before{position:absolute;z-index:2;content:'';left:50%;top:-70px;margin:0 0 0 -40px;height:100px;width:80px;background:rgba(255,255,255,.2);background-image:linear-gradient(left,rgba(255,255,255,.4) 0,rgba(255,255,255,.1) 50%,rgba(255,255,255,.4) 100%),linear-gradient(bottom,#fff 0,rgba(255,255,255,0) 40%),linear-gradient(top,rgba(255,255,255,.8) 0,rgba(255,255,255,0) 40%);border-radius:6px;box-shadow:0 0 0 1px rgba(0,0,0,.8);opacity:.5}.card:after{position:absolute;content:'';z-index:2;height:20px;width:20px;top:-55px;left:50%;margin:0 0 0 -10px;border-radius:50%;box-shadow:0 0 0 5px rgba(255,255,255,.6),0 0 10px rgba(0,0,0,.7),inset 2px 2px 2px rgba(0,0,0,.5)}.card header{position:relative;background:#29b5d4;height:90px;width:100%;border-top-left-radius:4px;border-top-right-radius:4px;padding:35px 20px;opacity:.9;display:flex;align-items:center;justify-content:space-between}.card header:after{position:absolute;content:'';left:1px;top:1px;width:100%;height:10px;background:linear-gradient(bottom,rgba(255,255,255,.1) 0,rgba(255,255,255,.05) 70%,rgba(255,255,255,0) 100%)}.card header:before{position:absolute;z-index:1;content:'';left:50%;top:22px;margin:0 0 0 -50px;height:15px;width:100px;border-radius:25px;box-shadow:inset 1px 1px 0 1px rgba(0,0,0,.3),inset -1px -1px 0 0 rgba(255,255,255,.5)}.card header h1{color:#fff;line-height:90%;font-size:35px;margin:0;text-shadow:-1px -1px 1px rgba(0,0,0,.5);width:50%}.card article{padding:30px}.card article img{border:5px solid #fff;box-shadow:0 0 3px rgba(0,0,0,.25);float:left;margin-right:30px;width:190px;height:250px;transition:all .3s ease-in-out}.card article h2{color:#1d4379;float:left;margin:0 5px 15px 0;font-weight:400;padding:0 0 8px 0;width:450px}.card article .area{position:relative;height:170px;width:470px;float:left}.card article .area h3{margin:0;color:#1d4379;font-size:20px;padding-right:25px}.card article .area ul{margin:5px 0 30px 0;padding:0;list-style:none}.card article .area ul li{margin:20px 0 0 0;font-size:16px;color:#1d4379;text-shadow:0 0 1px rgba(0,0,0,.3)}.card article .area ul li .bar{position:relative;width:280px;height:15px;display:inline-block;border-radius:50px;margin:0 15px 0 0;opacity:.9;background-color:#cacaca;box-shadow:inset 0 2px 2px rgba(0,0,0,.35)}.card article .area ul li .bar.percent-100:before{width:280px}.card article .area ul li .bar.percent-90:before{width:260px}.card article .area ul li .bar.percent-80:before{width:240px}.card article .area ul li .bar.percent-70:before{width:220px}.card article .area ul li .bar.percent-60:before{width:200px}.card article .area ul li .bar.percent-50:before{width:180px}.card article .area ul li:before{content:'\\2605';margin-right:5px}";
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = " <style> "+style+" </style> "+printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }
}

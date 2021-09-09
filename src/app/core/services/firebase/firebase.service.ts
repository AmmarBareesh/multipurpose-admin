import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { AuthenticationService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  windowRef: any;
  private statusFire: BehaviorSubject<any> = new BehaviorSubject("");
  chaekcSTatus:boolean=false;
  constructor(private auth:AuthenticationService,private router:Router,private tost:ToastrService) { 
  }
  setAcount(){
    const firebaseConfig = {
      apiKey: "AIzaSyAVufGHSO7FlirfrPBPcUlPn8dZ5IuXxak",
      authDomain: "tarbia-577af.firebaseapp.com",
      projectId: "tarbia-577af",
      storageBucket: "tarbia-577af.appspot.com",
      messagingSenderId: "534780348710",
      appId: "1:534780348710:web:3bd8697f31bdade35d99e7",
      measurementId: "G-DK9QNNGE4N"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.statusFire.next({status:"true",user:user});
        //alert(JSON.stringify(user));
      } else {
        this.statusFire.next({status:"true",user:null});
      }
    });
    
  }
  getStatus(){
    return this.statusFire.asObservable();
  }
  setwindiwsRef(recaptchaDiv){
    this.windowRef = this.windowRefg
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptchaDiv);

    this.windowRef.recaptchaVerifier.render();
    return this.windowRef;
  }
  
   CreateUser(id,token,status) {
    var UserToken = {
      token:token,
      id:id,
      status:status
    };
  //  var newPostKey = firebase.database().ref().child('USERS').push().key;
    var updates = {};
    updates['/USERS/' + id] = UserToken;
    return firebase.database().ref().update(updates);
  }
    
  StatusUsers(id) {
  //  var newPostKey = firebase.database().ref().child('USERS').push().key;
    var updates = {};
    updates['/USERS/' + id+"/status"] = 0;
    return firebase.database().ref().update(updates);
  }
  token:string="";
  checkUser(){
    this.chaekcSTatus=true;
    firebase.database().ref('/USERS/' + (<any>this.auth).user.user.id).on('value',(snapshot:any) => {
      if(snapshot)
      {
        if(snapshot.val().token!=this.auth.user.token)
        {
          console.log("Login STOP......");
          this.tost.warning("You are logged in from another device", "warning" ,{
            timeOut :  5000
          });
          this.router.navigateByUrl('account/login');
          this.auth.logout();
        }
        else{
          console.log("START......");

          if(snapshot.val().status==undefined || snapshot.val().status==0)
          {
            this.tost.warning("Your account has been disabled please", "warning" ,{
              timeOut :  5000
            });
            this.router.navigateByUrl('account/login');
            this.auth.logout();
          }
        }
      }
    });
    // var starCountRef = firebase.database().ref('USERS/' + id );
    // starCountRef.on('value', (snapshot) => {
    //   const data = snapshot.val();
    //   alert(JSON.stringify(data));
    // });
  }

  get windowRefg():any {
    return window
  }
  sendLoginCode(num) {

    const appVerifier = this.windowRef.recaptchaVerifier;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

            })
            .catch( error =>{ 
              if(error.code=="auth/too-many-requests")
              {
                alert("تم حظر الرقم يرجة المحاولة بعد ساعة");
              }
            } );

  }

  verifyLoginCode(verificationCode) {
    this.windowRef.confirmationResult
                  .confirm(verificationCode)
                  .then( result => {

    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }

  logOut(){
    firebase.auth().signOut().then(res=>{
      
    });
  }
}

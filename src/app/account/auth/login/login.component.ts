import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../../core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';
  loading = true;


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
    private authenticationService: AuthenticationService,private fire:FirebaseService) { }


 phoneNumber:string="";
 windowRef:any;
  ngOnInit() {
   this.fire.setAcount();
   //this.fire.logOut();
   this.fire.getStatus().subscribe(res=>{
     if(res)
     {
       if(res.user)
       {
         this.phoneVirefy=true;
         this.phoneNumber=res.user.phoneNumber;
       }
       else
       {
         this.phoneVirefy=false;
         this.windowRef=this.fire.setwindiwsRef("recaptcha-container");
       }
     }
     this.loading=false;
   })
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required],
    });
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  tell:any;
  getTell(event){
    this.tell=event.tell;

  }
  phoneVirefy:boolean=false;
  sendCode()
  {
    this.fire.sendLoginCode(this.tell.getNumber());
  }
  veryFy(code){
    this.fire.verifyLoginCode(code);

  }
  ngAfterViewInit() {
    document.body.classList.add('authentication-bg');
    document.body.classList.add('authentication-bg-pattern');
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.phoneNumber,this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.message=="1001")
          {
            this.loading = false;
            this.error ="Not Fond Account";
          }
          else if(data.message==1111)
          {
            this.loading = false;
            this.error ="Error Password";
          }
          else{
            this.router.navigate([this.returnUrl]);
          }
        },
        error => {
          this.error = error.message;
          this.loading = false;
        });
  }
}

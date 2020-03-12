import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiZugriffService } from '../services/api-zugriff.service';

@Component({
  selector: 'app-intranet-login',
  templateUrl: './intranet-login.component.html',
  styleUrls: ['./intranet-login.component.scss']
})
export class IntranetLoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  loginResponse;
  lg;

  constructor(
    private apizugriffservice:ApiZugriffService,
    private fb: FormBuilder,
    private router: Router,
    private cookieService: CookieService
    
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    if(this.cookieService.get("LoginTrue") === "true"){
      this.router.navigate(['']);
    }
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
 this.apizugriffservice.postLogin({password: this.form.value.password ,user_name: this.form.value.userName}).subscribe(data => {
  this.loginResponse = data;

  if (this.loginResponse.is_valid) {
    window.location.reload();
    this.cookieService.set("LoginTrue","true");
    this.router.navigate(['']);
    if(this.loginResponse.is_teacher){
      this.cookieService.set("isTeacher","true");
      console.log("yes")
    }
  }
  })
    this.formSubmitAttempt = true;
  }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-intranet-login',
  templateUrl: './intranet-login.component.html',
  styleUrls: ['./intranet-login.component.scss']
})
export class IntranetLoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
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
    if (this.form.valid) {
      this.cookieService.set("LoginTrue","true");
      this.router.navigate(['']);
      window.location.reload();
    }
   
    this.formSubmitAttempt = true;
  }
}
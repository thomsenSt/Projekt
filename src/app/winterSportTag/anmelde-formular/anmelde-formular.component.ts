import { Disciplin } from './../../model/disciplin.model';
import { ApiZugriffService } from './../../services/api-zugriff.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from 'src/app/model/signup.model';
import { sign } from 'crypto';

@Component({
  selector: 'app-anmelde-formular',
  templateUrl: './anmelde-formular.component.html',
  styleUrls: ['./anmelde-formular.component.scss']
})
export class AnmeldeFormularComponent implements OnInit {
  dis: Disciplin;
  form: FormGroup;
  SingValue: Signup;
  disciplinValue;
  classes = ['1a','1b','2a','2b', '3a', '3b', '4a', '4b'];
  constructor(private fb: FormBuilder,
    private ApiZugriffService: ApiZugriffService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      vorName: ['', Validators.required],
      class: ['', Validators.required],
      disciplin: ['', Validators.required],
      difficult: ['', Validators.required]
    });
    this.ApiZugriffService.sendGetDisciplin().subscribe((data: Disciplin)=>{
      this.dis = data;
      console.log(this.dis);
    })
  }

  print(){
    window.print();
  }

  submit(){
    console.log(this.form.value)


      this.ApiZugriffService.postSignUp({first_name: this.form.value.vorName, last_name: this.form.value.name, class:this.form.value.class, disciplin_id:this.form.value.disciplin.disciplin_id}).subscribe(data => {
        console.log(data)
      
        })

      console.log(this.SingValue)
    if (this.form.valid) {
      console.log(this.form.value);
    }

  }

}

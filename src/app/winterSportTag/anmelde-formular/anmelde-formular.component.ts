import { Disciplin } from './../../model/disciplin.model';
import { ApiZugriffService } from './../../services/api-zugriff.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anmelde-formular',
  templateUrl: './anmelde-formular.component.html',
  styleUrls: ['./anmelde-formular.component.scss']
})
export class AnmeldeFormularComponent implements OnInit {
  dis: Disciplin;
  form: FormGroup;
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
    this.ApiZugriffService.sendGetRequest().subscribe((data: Disciplin)=>{
      this.dis = data;
      console.log(this.dis);
    })
  }

  print(){
    window.print();
  }

  submit(){
    if (this.form.valid) {
      console.log(this.form.value);
    }

  }

}

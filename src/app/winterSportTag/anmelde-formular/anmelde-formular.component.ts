import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-anmelde-formular',
  templateUrl: './anmelde-formular.component.html',
  styleUrls: ['./anmelde-formular.component.scss']
})
export class AnmeldeFormularComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
  }

  submit(){
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiZugriffService } from 'src/app/services/api-zugriff.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.scss']
})
export class CompanionComponent implements OnInit {
  Valu;
  dis;
  dist;
  form: FormGroup;
  forms: FormGroup;
  CompanionName=false;
  comp1: boolean;
  comp2: boolean;
  weg: boolean;
  constructor(private ApiZugriffService: ApiZugriffService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      disciplin: ['', Validators.required],
    });
    this.forms = this.fb.group({
      NameVor: ['', Validators.required],
      Name: ['', Validators.required],
    });

    this.ApiZugriffService.sendGetDisciplin().subscribe((data: any)=>{
      this.dis = data;

    })
  }
  companionProof(){
    this.weg=true;
    console.log(this.form.value.disciplin.disciplin_id)
    this.ApiZugriffService.getGroupById(this.form.value.disciplin.disciplin_id).subscribe((data: any)=>{

      console.log(data)
      this.dist = data;
      if(this.dist.companion_1 == null){
        this.comp1 = true;

      }else if(this.dist.companion_2 == null){
        this.comp2 = true;

      }
    })
    this.CompanionName=true;
    if(this.form.value.di)
    console.log(this.form.value)

  }
comps1(value){
  this.weg=true;
  console.log(value.group_id)
  this.ApiZugriffService.putCompanion1(this.forms.value.NameVor+this.forms.value.Name,value.group_id).subscribe(data => {

    })


}

comps2(value){
  console.log(value.group_id)
  this.ApiZugriffService.putCompanion2(this.forms.value.NameVor+this.forms.value.Name,value.group_id).subscribe(data => {

    })

}
}


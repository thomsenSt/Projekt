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
  form: FormGroup;
  constructor(private ApiZugriffService: ApiZugriffService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      disciplin: ['', Validators.required],
    });
    this.ApiZugriffService.sendGetDisciplin().subscribe((data: any)=>{
      this.dis = data;
     
    })
  }
  companionProof(){
    console.log(this.form.value)
    console.log(this.Valu)
    if(this.Valu != null){
      console.log(this.Valu)
    }
  }
  
}

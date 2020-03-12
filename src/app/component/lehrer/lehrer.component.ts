import { ApiZugriffService } from 'src/app/services/api-zugriff.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lehrer',
  templateUrl: './lehrer.component.html',
  styleUrls: ['./lehrer.component.scss']
})
export class LehrerComponent implements OnInit {

  tda;
  constructor(private ApiZugriffService:ApiZugriffService) { }

  ngOnInit(): void {
    this.ApiZugriffService.getForms().subscribe((data: any)=>{
      this.tda = data;
      console.log(data)
    })
  }

  approval(formid){
    console.log(formid)
   this.ApiZugriffService.ApproveForm(formid).subscribe((data: any)=>{
      console.log(data)

    })
    window.location.reload();

  }

}

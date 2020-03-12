import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-print-layout',
  templateUrl: './print-layout.component.html',
  styleUrls: ['./print-layout.component.scss']
})
export class PrintLayoutComponent implements OnInit {
  @Input() prints;
  constructor() { }

  ngOnInit(): void {
    console.log(this.prints);
  }

}

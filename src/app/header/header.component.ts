import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private cookieService: CookieService,
    ) { }

  ngOnInit(): void {
  }
  logout(){
    console.log("sd")
    this.cookieService.delete('LoginTrue')
    window.location.reload();

  }
}

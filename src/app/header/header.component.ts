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
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  ws(){
    this.router.navigate(['ws2020']);
  }

  logout(){
    console.log("sd")
    this.cookieService.delete('LoginTrue')
    window.location.reload();
    
  }
}

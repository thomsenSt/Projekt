import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Projektwoche';
  loggedIn = false;
  vookie

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.ifhome();
  }
  


  ifhome(){
    this.vookie = this.cookieService.get('LoginTrue')
    if(this.vookie === 'true'){
      this.loggedIn = true;

    }
    if(this.loggedIn == false){
      this.router.navigate(['/login'])
    }
  }
}

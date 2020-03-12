import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  teacherTrue;

  constructor(private cookieService: CookieService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(this.cookieService.get("isTeacher")==="true"){
      this.teacherTrue = true;
    }
  }
  home(){
    this.router.navigate([''])
  }
  ws(){
    this.router.navigate(['ws2020']);
  }

  logout(){
    console.log("sd")
    this.cookieService.delete('LoginTrue')
    this.cookieService.delete('isTeacher')
    window.location.reload();

  }

  lehrer(){
    this.router.navigate(['lehrer'])
  }
}

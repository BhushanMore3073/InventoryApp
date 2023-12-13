import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Login:string = 'Login';
  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }

  redirectToLoginForm(){
    this.router.navigate(['/login']);
  }
  checkButton(){
    if(this.Login==='Login'){
      this.Login='Logout';
    }
    if(this.Login==='Logout'){
      this.Login='Login';
    }
  }
}

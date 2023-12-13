import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-login',
  templateUrl: './check-login.component.html',
  styleUrls: ['./check-login.component.css']
})
export class CheckLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirectToAdminLogin(){
    this.router.navigate(['/admin-login']);
  }

  redirectToCustomerLogin(){
    this.router.navigate(['/customer-login']);
  }

  redirectToDealerLogin(){
    this.router.navigate(['/dealer-login']);
  }
}

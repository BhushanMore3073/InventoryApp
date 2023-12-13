import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { CustomerDashboardService } from 'src/app/Services/customer-dashboard.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  customer: Customer = new Customer();
  constructor(private loginrService:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.loginrService.customerLogin(this.customer).subscribe(data => {
      if(data!=null){
        alert("login successful")
        this.router.navigate(['/customer-dashboard',data.customerName,data.customerId]);
      }
    });
  }
}

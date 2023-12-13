import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-forgot-customer',
  templateUrl: './forgot-customer.component.html',
  styleUrls: ['./forgot-customer.component.css']
})
export class ForgotCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  confirmPassword:string = '';
  constructor(private loginrService:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  forgot(){
    if(this.customer.customerPassword === this.confirmPassword){
      this.loginrService.customerForgot(this.customer).subscribe(data => {
        if(data!=null){
          alert("password changed successfully !");
        }else{
          alert("please check your credentials");
        }
      });
    }
  }
}

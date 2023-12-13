import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { CustomerDashboardService } from 'src/app/Services/customer-dashboard.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {


  customer: Customer = new Customer();
  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  registerCustomer(){
    this.loginService.customerRegister(this.customer).subscribe(data =>{
      if(data!=null){
        alert("Registerd Successfully !");
        console.log("From if part : "+data)
        this.router.navigateByUrl('/customer-login');
      }else{
        console.log("from else part: "+data)
      }
    });
  }
}

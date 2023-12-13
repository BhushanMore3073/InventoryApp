import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { AdminDashboardService } from 'src/app/Services/admin-dashboard.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-admin-register-customer',
  templateUrl: './admin-register-customer.component.html',
  styleUrls: ['./admin-register-customer.component.css']
})
export class AdminRegisterCustomerComponent implements OnInit {

  constructor(private adminDash:AdminDashboardService,private route:ActivatedRoute,private router: Router) { }
  customer: Customer = new Customer();
  adminname = '';
  ngOnInit(): void {
    this.adminname = this.route.snapshot.paramMap.get('name') as string;
  }
  registerCustomer(){
    this.adminDash.addCustomer(this.customer).subscribe(data=>{
      if(data!=null){
        alert("data added successfully");
        this.router.navigateByUrl('/admin-dashboard');
      }else{
        alert("operation failed");
      }
    });
  }
}

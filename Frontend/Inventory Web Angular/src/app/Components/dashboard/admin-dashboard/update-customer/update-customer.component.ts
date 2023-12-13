import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { AdminDashboardService } from 'src/app/Services/admin-dashboard.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private adminDash:AdminDashboardService, private router:Router) { }
  customerUpdate!:Customer;
  adminname = '';
  ngOnInit(): void {
    this.adminname = this.activatedRoute.snapshot.paramMap.get('name') as string;
    let customerId = "";
    customerId= this.activatedRoute.snapshot.paramMap.get('customerId') as string;
    this.adminDash.viewCustomerById(customerId).subscribe(data=>{
      this.customerUpdate = data;
      console.log(data);
      console.log(this.customerUpdate);
    });
    
  }
  
  updateCustomer(){
    this.adminDash.updateCustomer(this.customerUpdate).subscribe(data=>{
      if(data!=null){
          alert("Updated Successfully")
          this.router.navigate(['/view-customer']);
      }else{
        console.error();
      }
    });
  }
}

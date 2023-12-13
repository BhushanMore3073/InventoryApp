import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { CustomerDashboardService } from 'src/app/Services/customer-dashboard.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private custDashServ:CustomerDashboardService) { }

  customer!:Customer;
  id = '';
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.id+" received from dashboard to profile");
    this.custDashServ.viewCustomerById(this.id).subscribe(data =>{
      this.customer = data;
      console.log(data+"/nfrom profile");
    });
  }

  updateCustomer(){
    this.custDashServ.updateCustomer(this.customer).subscribe(data=>{
      if(data!=null){
          alert("Updated Successfully")
          this.router.navigate(['/view-customer']);
      }else{
        console.error();
      }
    });
  }
}

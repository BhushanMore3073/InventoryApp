import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { Item } from 'src/app/Classes/item';
import { AdminDashboardService } from 'src/app/Services/admin-dashboard.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  customers!:Customer[];
  updateCustomer!:Customer;
  constructor(private router:Router,private adminDash:AdminDashboardService,private route:ActivatedRoute) { }
  adminname = '';
  ngOnInit(): void {
    this.adminname = this.route.snapshot.paramMap.get('name') as string;
    this.viewAllcustomer();
  }
  viewAllcustomer(){
    this.adminDash.viewCustomer().subscribe(data => {
      this.customers = data;
    });
  }
  edit(customer:Customer){
    this.updateCustomer=customer;
    this.router.navigate(['/update-customer',customer.customerId,this.adminname]);
  }
  deleteCustomer(customerId:number){
    this.adminDash.deleteCustomer(customerId);
    alert("Deleted Successfully !");
    this.viewAllcustomer();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { Dealer } from 'src/app/Classes/dealer';
import { Item } from 'src/app/Classes/item';
import { Purchase } from 'src/app/Classes/purchase';
import { CustomerDashboardService } from 'src/app/Services/customer-dashboard.service';

@Component({
  selector: 'app-customer-view-purchase',
  templateUrl: './customer-view-purchase.component.html',
  styleUrls: ['./customer-view-purchase.component.css']
})
export class CustomerViewPurchaseComponent implements OnInit {

  purchase!:Purchase;
  customer!:Customer;
  item!:Item;
  vendor!:Dealer;
  constructor(private router:Router,private customerDashServ:CustomerDashboardService,private route:ActivatedRoute) { }
  custName = ''
  custId = '';
  purchaseId = 0;
  
  ngOnInit(): void {
    this.custName = this.route.snapshot.paramMap.get('custName') as string;
    this.custId = this.route.snapshot.paramMap.get('custId') as string;
    this.purchaseId =parseInt(this.route.snapshot.paramMap.get('purchaseId') as string);
    this.customerDashServ.getPurchaseById(this.purchaseId).subscribe(data => {
      this.purchase = data;
      console.log(this.purchase)
      console.log(data);
      // getting other entities
      this.customerDashServ.viewCustomerById(this.custId).subscribe(data=>{
        this.customer = data;
        console.log(this.customer);
      });
      this.customerDashServ.viewItemById(this.purchase.itemId.toString()).subscribe(data=>{
        this.item = data;
        console.log(this.item);
        
        this.customerDashServ.viewVendorById(this.item.vendorId.toString()).subscribe(data=>{
          this.vendor = data;
          console.log(this.vendor);
        });
      });
    });
  }

}

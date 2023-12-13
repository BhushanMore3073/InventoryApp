import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { Dealer } from 'src/app/Classes/dealer';
import { Item } from 'src/app/Classes/item';
import { Purchase } from 'src/app/Classes/purchase';
import { AdminDashboardService } from 'src/app/Services/admin-dashboard.service';

@Component({
  selector: 'app-admin-view-purchase',
  templateUrl: './admin-view-purchase.component.html',
  styleUrls: ['./admin-view-purchase.component.css']
})
export class AdminViewPurchaseComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private adminDash:AdminDashboardService, private router:Router) { }

  // dealerUpdate!:Dealer;
  purchase!:Purchase;
  customer!:Customer;
  item!:Item;
  vendor!:Dealer;

  adminname = '';
  purchaseId = 0;
  ngOnInit(): void {
    this.adminname = this.activatedRoute.snapshot.paramMap.get('name') as string;
    this.purchaseId = parseInt(this.activatedRoute.snapshot.paramMap.get('purchaseId') as string);
    this.adminDash.viewPurchaseById(this.purchaseId).subscribe(data => {
      this.purchase = data;
      this.adminDash.viewCustomerById(this.purchase.customerId.toString()).subscribe(data => {
        this.customer = data;
      });
      this.adminDash.viewItemById(this.purchase.itemId.toString()).subscribe(data => {
        this.item = data;
        this.adminDash.viewDealerById(this.item.vendorId.toString()).subscribe(data => {
          this.vendor = data;
        });
      });
    });
  }

}

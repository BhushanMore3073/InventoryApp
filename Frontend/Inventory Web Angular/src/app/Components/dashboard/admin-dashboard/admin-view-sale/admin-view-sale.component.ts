import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { Dealer } from 'src/app/Classes/dealer';
import { Item } from 'src/app/Classes/item';
import { Purchase } from 'src/app/Classes/purchase';
import { Sale } from 'src/app/Classes/sale';
import { AdminDashboardService } from 'src/app/Services/admin-dashboard.service';

@Component({
  selector: 'app-admin-view-sale',
  templateUrl: './admin-view-sale.component.html',
  styleUrls: ['./admin-view-sale.component.css']
})
export class AdminViewSaleComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private adminDash:AdminDashboardService, private router:Router) { }

  // dealerUpdate!:Dealer;
  sale!:Sale;
  customer!:Customer;
  item!:Item;
  vendor!:Dealer;

  adminname = '';
  saleId = 0;
  ngOnInit(): void {
    this.adminname = this.activatedRoute.snapshot.paramMap.get('name') as string;
    this.saleId = parseInt(this.activatedRoute.snapshot.paramMap.get('saleId') as string);
    this.adminDash.viewSaleById(this.saleId).subscribe(data => {
      this.sale = data;
      console.log(this.sale);
      this.adminDash.viewCustomerById(this.sale.customerId.toString()).subscribe(data => {
        this.customer = data;
        console.log(this.customer);
      });
      this.adminDash.viewItemById(this.sale.itemId.toString()).subscribe(data => {
        this.item = data;
        console.log(this.item)
        this.adminDash.viewDealerById(this.item.vendorId.toString()).subscribe(data => {
          this.vendor = data;
          console.log(this.vendor);
        });
      });
    });
  }

}

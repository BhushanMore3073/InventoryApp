import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { Dealer } from 'src/app/Classes/dealer';
import { Item } from 'src/app/Classes/item';
import { Sale } from 'src/app/Classes/sale';
import { CustomerDashboardService } from 'src/app/Services/customer-dashboard.service';
import { VendorDashboardService } from 'src/app/Services/vendor-dashboard.service';

@Component({
  selector: 'app-vendor-view-sale',
  templateUrl: './vendor-view-sale.component.html',
  styleUrls: ['./vendor-view-sale.component.css']
})
export class VendorViewSaleComponent implements OnInit {

  constructor(private router:Router,private vendorDash:VendorDashboardService,private route:ActivatedRoute,private custDashServ:CustomerDashboardService) { }
  id = '';
  name = ''
  saleId = 0;
  sale!:Sale;
  item!:Item;
  customer!:Customer;
  vendor!:Dealer;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('vendorId') as string;
    this.name = this.route.snapshot.paramMap.get('vendorName') as string;
    this.saleId = parseInt(this.route.snapshot.paramMap.get('saleId') as string);
    console.log(this.saleId);
    this.vendorDash.viewSaleById(this.saleId).subscribe(data=>{
      this.sale = data;
      console.log(this.sale);
      console.log(data);
      this.custDashServ.viewCustomerById(this.sale.customerId.toString()).subscribe(data=>{
        this.customer = data;
        console.log(this.customer);
      });
      this.custDashServ.viewItemById(this.sale.itemId.toString()).subscribe(data=>{
        this.item = data;
        console.log(this.item);
        
        this.custDashServ.viewVendorById(this.item.vendorId.toString()).subscribe(data=>{
          this.vendor = data;
          console.log(this.vendor);
        });
      });

    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { Dealer } from 'src/app/Classes/dealer';
import { Item } from 'src/app/Classes/item';
import { Purchase } from 'src/app/Classes/purchase';
import { CustomerDashboardService } from 'src/app/Services/customer-dashboard.service';

@Component({
  selector: 'app-customer-confirm-page',
  templateUrl: './customer-confirm-page.component.html',
  styleUrls: ['./customer-confirm-page.component.css']
})
export class CustomerConfirmPageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private custDashServ: CustomerDashboardService) { }

  customer!: Customer;
  vendor!: Dealer;
  item!: Item;
  purchaseData!:Purchase;

  cutsId = '';
  itemId = '';
  vendorId = '';
  quantity!:number;

  today = '';

  ngOnInit(): void {
    this.today = new Date().toISOString().slice(0, 10);;
    this.cutsId = this.route.snapshot.paramMap.get('custId') as string;
    this.itemId = this.route.snapshot.paramMap.get('itemId') as string;
    this.vendorId = this.route.snapshot.paramMap.get('vendorId') as string;
    //getting the objects
    this.custDashServ.viewCustomerById(this.cutsId).subscribe(data => {
      this.customer = data;
    });

    this.custDashServ.viewVendorById(this.vendorId).subscribe(data => {
      this.vendor = data;
    });

    this.custDashServ.viewItemById(this.itemId).subscribe(data => {
      this.item = data;
    });
  }

  purchase(itm: Item) {
    if(itm.itemQuantity>this.quantity){
      this.router.navigate(['/customer-purchase-item', itm.itemId, this.cutsId, itm.vendorId,this.quantity]);
    }else{
      alert("we have "+itm.itemQuantity+" item's in stock");
    }
  }
}

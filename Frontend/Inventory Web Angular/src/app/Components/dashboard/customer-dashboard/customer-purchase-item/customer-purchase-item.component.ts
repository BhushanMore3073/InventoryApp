import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { Dealer } from 'src/app/Classes/dealer';
import { Item } from 'src/app/Classes/item';
import { Purchase } from 'src/app/Classes/purchase';
import { CustomerDashboardService } from 'src/app/Services/customer-dashboard.service';

@Component({
  selector: 'app-customer-purchase-item',
  templateUrl: './customer-purchase-item.component.html',
  styleUrls: ['./customer-purchase-item.component.css']
})
export class CustomerPurchaseItemComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private custDashServ:CustomerDashboardService) { }

  customer:Customer = new Customer();
  vendor:Dealer = new Dealer();
  item:Item = new Item();
  purchase:Purchase = new Purchase();

  cutsId = '';
  itemId = '';
  vendorId = '';
  quantity = 0;

  today = '';

  // properties defined for setting  up the purchase object
  custName = '';
  itemName = '';
  pricePerItem = 0;
  totalPrice = 0;

  ngOnInit(): void {
    this.today = new Date().toISOString().slice(0,10);;
    this.cutsId = this.route.snapshot.paramMap.get('custId') as string;
    this.itemId = this.route.snapshot.paramMap.get('itemId') as string;
    this.vendorId = this.route.snapshot.paramMap.get('vendorId') as string;
    this.quantity = parseInt(this.route.snapshot.paramMap.get('quantity') as string);
    //getting the objects
    this.custDashServ.viewCustomerById(this.cutsId).subscribe(data =>{
      this.customer = data;
      this.purchase.customerName = this.customer.customerName;
      // console.log(this.custName);
    });
    
    this.custDashServ.viewVendorById(this.vendorId).subscribe(data =>{
      this.vendor = data;
    });
    
    this.custDashServ.viewItemById(this.itemId).subscribe(data => {
      this.item = data;
      this.purchase.itemName = this.item.itemName;
      this.purchase.pricePerItem = this.item.itemPrice;
      this.totalPrice = this.item.itemPrice * this.quantity;
    });
    // this.generatePurchase();

    {
      this.purchase.customerId = parseInt(this.cutsId);
      this.purchase.itemId = parseInt(this.itemId);
      this.purchase.purchaseDate = this.today;
      this.purchase.purchaseQuantity = this.quantity;
      // this.purchase.totalPrice = this.totalPrice;
      // console.log(this.purchase.customerId+"|"+this.purchase.customerName+"|"
      // +this.purchase.itemId+"|"+this.purchase.itemName+"|"+this.purchase.pricePerItem+"|"+
      // this.purchase.purchaseDate+"|"+this.purchase.purchaseQuantity+"|"+this.purchase.totalPrice+"|");
      // console.log(JSON.stringify(this.purchase));
      // console.log(JSON.stringify(this.customer));
      // console.log(this.item);
      this.custDashServ.generatePurchase(this.purchase).subscribe(data=>{
        if(data!=null){
          alert("purchase done ...!");
        }else{
          alert("purchase failed ...!");
        }
      });
    }
  }
  
  generatePurchase(){
  }
}

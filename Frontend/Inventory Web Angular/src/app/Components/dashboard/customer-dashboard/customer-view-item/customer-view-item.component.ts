import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/Classes/item';
import { CustomerDashboardService } from 'src/app/Services/customer-dashboard.service';

@Component({
  selector: 'app-customer-view-item',
  templateUrl: './customer-view-item.component.html',
  styleUrls: ['./customer-view-item.component.css']
})
export class CustomerViewItemComponent implements OnInit {

  items!:Item[];
  constructor(private router:Router,private customerDashServ:CustomerDashboardService,private route:ActivatedRoute) { }
  itemUpdate!:Item;
  custName = ''
  custId = '';
  vendorName = new Map();
  
  ngOnInit(): void {
    this.custName = this.route.snapshot.paramMap.get('custName') as string;
    this.custId = this.route.snapshot.paramMap.get('custId') as string;
    this.customerDashServ.viewAllItems().subscribe(data => {
      if(data.length!=0){
        this.items = data;
        for(let item of this.items){
          let vendorId = ''+item.vendorId;
          this.customerDashServ.viewVendorById(vendorId).subscribe(data => {
            if(data!=null){
              this.vendorName.set(item.vendorId,data.vendorName);
              // this.vendorName = data.vendorName;
              console.log(data);
            }else{
              this.vendorName.set(item.vendorId,"Not Available")
              console.log('data is null');
              // this.vendorName = "Not Available";
            }
          });
        }
      }
    });
  }

  purchase(item:Item){
      this.router.navigate(['/customer-confirm-item',item.itemId,this.custId,item.vendorId]);
  }
}

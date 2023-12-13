import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Purchase } from 'src/app/Classes/purchase';
import { CustomerDashboardService } from 'src/app/Services/customer-dashboard.service';

@Component({
  selector: 'app-customer-purchase-history',
  templateUrl: './customer-purchase-history.component.html',
  styleUrls: ['./customer-purchase-history.component.css']
})
export class CustomerPurchaseHistoryComponent implements OnInit {

  purchases!:Purchase[];
  constructor(private router:Router,private customerDashServ:CustomerDashboardService,private route:ActivatedRoute) { }
  custName = ''
  custId = '';
  vendorName = new Map();
  
  ngOnInit(): void {
    this.custName = this.route.snapshot.paramMap.get('custName') as string;
    this.custId = this.route.snapshot.paramMap.get('custId') as string;
    this.customerDashServ.getAllPurchase(parseInt(this.custId)).subscribe(data => {
      if(data.length!=0){
        this.purchases = data;
      }
    });
  }

  viewPurchase(purchase:Purchase){
    this.router.navigate([`/customer-view-purchase`,this.custName,this.custId,purchase.purchaseId]);
  }

}

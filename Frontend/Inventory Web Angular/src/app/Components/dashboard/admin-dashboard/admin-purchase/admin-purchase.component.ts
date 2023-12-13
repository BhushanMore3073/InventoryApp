import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Purchase } from 'src/app/Classes/purchase';
import { AdminDashboardService } from 'src/app/Services/admin-dashboard.service';

@Component({
  selector: 'app-admin-purchase',
  templateUrl: './admin-purchase.component.html',
  styleUrls: ['./admin-purchase.component.css']
})
export class AdminPurchaseComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private adminDash:AdminDashboardService, private router:Router) { }
  // dealerUpdate!:Dealer;
  purchases!:Purchase[];

  adminname = '';
  ngOnInit(): void {
    this.adminname = this.activatedRoute.snapshot.paramMap.get('name') as string;
    this.adminDash.viewAllPurchase().subscribe(data=>{
      this.purchases = data;
    });
  }

  viewPurchase(purchase:Purchase){
    this.router.navigate(['/admin-view-purchase',this.adminname,purchase.purchaseId]);
  }
}

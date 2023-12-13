import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from 'src/app/Classes/sale';
import { AdminDashboardService } from 'src/app/Services/admin-dashboard.service';

@Component({
  selector: 'app-admin-sales',
  templateUrl: './admin-sales.component.html',
  styleUrls: ['./admin-sales.component.css']
})
export class AdminSalesComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private adminDash:AdminDashboardService, private router:Router) { }

  // dealerUpdate!:Dealer;
  sales!:Sale[];
  // customer!:Customer;
  // item!:Item;
  // vendor!:Dealer;

  adminname = '';
  ngOnInit(): void {
    this.adminname = this.activatedRoute.snapshot.paramMap.get('name') as string;
    this.adminDash.viewAllSales().subscribe(data=>{
      this.sales = data;
    });
  }
  viewSales(sale:Sale){
    this.router.navigate(['/admin-view-sale',this.adminname,sale.saleId]);
  }
}

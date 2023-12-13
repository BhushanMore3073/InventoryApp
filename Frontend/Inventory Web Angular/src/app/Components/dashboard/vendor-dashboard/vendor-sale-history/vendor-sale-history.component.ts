import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from 'src/app/Classes/sale';
import { VendorDashboardService } from 'src/app/Services/vendor-dashboard.service';

@Component({
  selector: 'app-vendor-sale-history',
  templateUrl: './vendor-sale-history.component.html',
  styleUrls: ['./vendor-sale-history.component.css']
})
export class VendorSaleHistoryComponent implements OnInit {

  constructor(private router:Router,private vendorDash:VendorDashboardService,private route:ActivatedRoute) { }
  id = '';
  name = ''
  sales!:Sale[];
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('vendorId') as string;
    this.name = this.route.snapshot.paramMap.get('vendorName') as string;
    this.vendorDash.viewSalesByVendorId(parseInt(this.id)).subscribe(data=>{
      this.sales = data;
    })
  }

  viewSales(sale:Sale){
    this.router.navigate(['/vendor-view-sale',this.name,this.id,sale.saleId]);
  }
}

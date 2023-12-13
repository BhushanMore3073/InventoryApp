import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dealer } from 'src/app/Classes/dealer';
import { AdminDashboardService } from 'src/app/Services/admin-dashboard.service';

@Component({
  selector: 'app-view-dealers',
  templateUrl: './view-dealers.component.html',
  styleUrls: ['./view-dealers.component.css']
})
export class ViewDealersComponent implements OnInit {
  dealers!:Dealer[];
  updateDealer!:Dealer;
  constructor(private router:Router,private adminDash:AdminDashboardService,private route:ActivatedRoute) { }
  adminname = '';
  ngOnInit(): void {
    this.adminname = this.route.snapshot.paramMap.get('name') as string;
    this.viewAllDealer();
  }
  viewAllDealer(){
    this.adminDash.viewDealer().subscribe(data => {
      this.dealers = data;
    });
  }
  edit(dealer:Dealer){
    this.updateDealer=dealer;
    this.router.navigate(['/update-dealer',dealer.vendorId,this.adminname]);
  }
  deleteDealer(vendorId:number){
    this.adminDash.deleteDealer(vendorId);
    this.adminDash.deleteItemByVendorId(vendorId);
    alert("delete successfully !")
    this.viewAllDealer();
  }

}

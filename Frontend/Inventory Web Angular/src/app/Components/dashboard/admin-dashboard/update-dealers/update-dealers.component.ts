import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { Dealer } from 'src/app/Classes/dealer';
import { AdminDashboardService } from 'src/app/Services/admin-dashboard.service';

@Component({
  selector: 'app-update-dealers',
  templateUrl: './update-dealers.component.html',
  styleUrls: ['./update-dealers.component.css']
})
export class UpdateDealersComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private adminDash:AdminDashboardService, private router:Router) { }
  dealerUpdate!:Dealer;

  adminname = '';
  ngOnInit(): void {
    this.adminname = this.activatedRoute.snapshot.paramMap.get('name') as string;
    let vendorId = "";
    vendorId= this.activatedRoute.snapshot.paramMap.get('vendorId') as string;
    this.adminDash.viewDealerById(vendorId).subscribe(data=>{
      this.dealerUpdate = data;
      console.log(data);
      console.log(this.dealerUpdate);
    });
  }
  updateDealer(){
    this.adminDash.updateDealer(this.dealerUpdate).subscribe(data=>{
      if(data!=null){
          alert("Updated Successfully")
          this.router.navigate(['/view-dealer']);
      }else{
        console.error();
      }
    });
  }
}

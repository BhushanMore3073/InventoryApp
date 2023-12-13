import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dealer } from 'src/app/Classes/dealer';
import { VendorDashboardService } from 'src/app/Services/vendor-dashboard.service';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private vendorDashServ:VendorDashboardService) { }

  vendor!:Dealer;
  id = '';
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.id+" received from dashboard to profile");
    this.vendorDashServ.viewVendorById(this.id).subscribe(data =>{
      this.vendor = data;
      console.log(data+"/nfrom profile");
    });
  }
  updateCustomer(){
    this.vendorDashServ.updateVendor(this.vendor).subscribe(data=>{
      if(data!=null){
          alert("Updated Successfully")
          this.router.navigate(['/view-customer']);
      }else{
        console.error();
      }
    });
  }

}

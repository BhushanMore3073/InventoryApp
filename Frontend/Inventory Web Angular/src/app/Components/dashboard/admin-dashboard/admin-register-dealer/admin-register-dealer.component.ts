import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dealer } from 'src/app/Classes/dealer';
import { AdminDashboardService } from 'src/app/Services/admin-dashboard.service';

@Component({
  selector: 'app-admin-register-dealer',
  templateUrl: './admin-register-dealer.component.html',
  styleUrls: ['./admin-register-dealer.component.css']
})
export class AdminRegisterDealerComponent implements OnInit {

  constructor(private adminDash:AdminDashboardService,private router: Router,private route:ActivatedRoute) { }
  dealer: Dealer = new Dealer();
  adminname = '';
  ngOnInit(): void {
    this.adminname = this.route.snapshot.paramMap.get('name') as string;
  }
  registerDealer(){
    this.adminDash.addDealer(this.dealer).subscribe(data=>{
      if(data!=null){
        alert("data added successfully");
        this.router.navigate(['/admin-dashboard',this.adminname]);
      }else{
        alert("operation failed");
      }
    });
  }
}

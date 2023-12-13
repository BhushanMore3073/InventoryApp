import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dealer } from 'src/app/Classes/dealer';
import { LoginService } from 'src/app/Services/login.service';
import { VendorDashboardService } from 'src/app/Services/vendor-dashboard.service';

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.css']
})
export class VendorRegisterComponent implements OnInit {

  dealer: Dealer = new Dealer();
  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  registerVendor(){
    this.loginService.vendorRegister(this.dealer).subscribe(data => {
      if(data!=null){
        alert("Registered Successfully !");
        this.router.navigateByUrl('/dealer-login');
      }else{
        alert("Check Your Credentials");
      }
    });
  }
}

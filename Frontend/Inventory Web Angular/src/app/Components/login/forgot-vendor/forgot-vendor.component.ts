import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dealer } from 'src/app/Classes/dealer';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-forgot-vendor',
  templateUrl: './forgot-vendor.component.html',
  styleUrls: ['./forgot-vendor.component.css']
})
export class ForgotVendorComponent implements OnInit {

  vendor:Dealer = new Dealer();
  confirmPassword:string = '';
  constructor(private loginrService:LoginService, private router: Router) { }
  ngOnInit(): void {
  }
  forgot(){
    if(this.vendor.vendorPassword === this.confirmPassword){
      this.loginrService.vendorForgot(this.vendor).subscribe(data => {
        if(data!=null){
          alert("password changed successfully !");
        }else{
          alert("please check your credentials");
        }
      });
    }
  }

}

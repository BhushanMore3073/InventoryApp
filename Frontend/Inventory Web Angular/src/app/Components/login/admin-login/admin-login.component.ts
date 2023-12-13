import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Classes/admin';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin = new Admin();
  constructor(private loginService: LoginService, private router: Router) { }

  adminname = '';
  ngOnInit(): void {
  }
  adminLogin() {
    this.loginService.doAdminLogin(this.admin).subscribe(data => {
      if (data != null) {
        alert("Admin LoggedIn Succefully");
        this.adminname = data.ausername;        
        this.router.navigate(['/admin-dashboard',this.adminname]);
      }else{
        alert("check your credentials !");
      }
    },
      error => alert("sorry please enter correct username and password!"));
  };
  getAdminName():string{
    return this.adminname;
  }
}


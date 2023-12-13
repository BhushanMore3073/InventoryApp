import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  @Input() adminname='';
  constructor(private router:Router) { }
  name = '';
  ngOnInit(): void {
    this.name =this.adminname;
    console.log(this.name)
  }
  
  viewItems(){
    this.router.navigate(['/admin-view-item',this.name])
  }
  addItems(){
    this.router.navigate(['/add-item',this.name])
  }

  viewCustomer(){
    this.router.navigate(['/view-customer',this.name])
  }
  addCustomer(){
    this.router.navigate(['/admin-register-customer',this.name])
  }

  viewVendor(){
    this.router.navigate(['/view-dealer',this.name])
  }
  addVendor(){
    this.router.navigate(['/admin-register-dealer',this.name])
  }
}

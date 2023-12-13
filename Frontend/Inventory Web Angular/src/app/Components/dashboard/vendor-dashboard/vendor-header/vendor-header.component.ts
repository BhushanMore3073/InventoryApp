import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-header',
  templateUrl: './vendor-header.component.html',
  styleUrls: ['./vendor-header.component.css']
})
export class VendorHeaderComponent implements OnInit {

  @Input() vendorName = '';
  @Input() vendorId = '';
  constructor(private router:Router) { }
  id = '';
  name = '';
  ngOnInit(): void {
    this.id = this.vendorId;
    this.name = this.vendorName;
  }
  goToProfile(){
    console.log(this.id+" from vendor header going to profile");
    this.router.navigate(['/vendor-profile',this.id]);
  }

}

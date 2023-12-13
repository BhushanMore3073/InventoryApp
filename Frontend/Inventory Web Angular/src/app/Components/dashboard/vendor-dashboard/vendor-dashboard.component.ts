import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  vendorName = '';
  vendorId = '';
  ngOnInit(): void {
    this.vendorName = this.activatedRoute.snapshot.paramMap.get('vendorName') as string;
    this.vendorId = this.activatedRoute.snapshot.paramMap.get('vendorId') as string;
  }

}

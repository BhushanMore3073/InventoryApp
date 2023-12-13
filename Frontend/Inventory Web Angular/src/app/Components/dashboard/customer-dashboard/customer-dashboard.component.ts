import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  custName = '';
  custId = '';
  ngOnInit(): void {
    this.custName = this.activatedRoute.snapshot.paramMap.get('custName') as string;
    this.custId = this.activatedRoute.snapshot.paramMap.get('custId') as string;
  }

}

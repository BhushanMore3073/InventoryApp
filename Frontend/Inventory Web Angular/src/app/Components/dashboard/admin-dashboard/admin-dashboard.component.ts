import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/Classes/admin';
import { AdminDashboardService } from 'src/app/Services/admin-dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private adminDash:AdminDashboardService, private router:Router) { }
  adminname = '';
  ngOnInit(): void {
    let admin = "";
    admin = this.activatedRoute.snapshot.paramMap.get('adminname') as string;
    this.adminname = admin;
  }
  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

import { Item } from 'src/app/Classes/item';
import { AdminDashboardService } from 'src/app/Services/admin-dashboard.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private adminDash:AdminDashboardService, private router:Router) { }

  itemUpdate!:Item;

  adminname = '';
  ngOnInit(): void {
    this.adminname = this.activatedRoute.snapshot.paramMap.get('name') as string;
    let itemId = "";
    itemId= this.activatedRoute.snapshot.paramMap.get('itemId') as string;
    this.adminDash.viewItemById(itemId).subscribe(data=>{
      this.itemUpdate = data;
      console.log(data);
      console.log(this.itemUpdate);
    });
  }
  updateItem(){
    this.adminDash.updateItem(this.itemUpdate).subscribe(data=>{
      if(data!=null){
          this.router.navigate(['/admin-view-item']);
      }else{
        console.error();
      }
    });
  }
}

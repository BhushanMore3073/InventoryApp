import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toArray } from 'rxjs';
import { Item } from 'src/app/Classes/item';
import { AdminDashboardService } from 'src/app/Services/admin-dashboard.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  items!:Item[];
  constructor(private router:Router,private adminDash:AdminDashboardService,private route:ActivatedRoute) { }
  itemUpdate!:Item;
  adminname = ''
  ngOnInit(): void {
    this.adminname = this.route.snapshot.paramMap.get('adminname') as string;
    console.log(this.adminname+"is collected from user");
    this.getAllItems();
  }
  getAllItems(){
    this.adminDash.viewItem().subscribe(data=>{
        this.items = data;
    });
  }
  edit(item:Item){
    this.itemUpdate = item;
    this.router.navigate(['/update-item',item.itemId,this.adminname]);
    // this.router.navigate([ '/update-item',item]);
  }
  updateItem(){
    this.adminDash.updateItem(this.itemUpdate).subscribe(data=>{
      if(data!=null){
          this.getAllItems();
      }
    });
  }
  deleteItem(itemId:number){
    this.adminDash.deleteItem(itemId);
    this.getAllItems();
  }
}

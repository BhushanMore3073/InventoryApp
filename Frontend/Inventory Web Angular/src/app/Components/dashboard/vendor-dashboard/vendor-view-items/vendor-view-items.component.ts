import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/Classes/item';
import { VendorDashboardService } from 'src/app/Services/vendor-dashboard.service';

@Component({
  selector: 'app-vendor-view-items',
  templateUrl: './vendor-view-items.component.html',
  styleUrls: ['./vendor-view-items.component.css']
})
export class VendorViewItemsComponent implements OnInit {

  items!:Item[];
  constructor(private router:Router,private vendorDash:VendorDashboardService,private route:ActivatedRoute) { }
  itemUpdate!:Item;
  id = '';
  name = ''
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('vendorId') as string;
    this.name = this.route.snapshot.paramMap.get('vendorName') as string;
    console.log(this.name+"is collected from user");
    this.getAllItems();
  }
  getAllItems(){
    this.vendorDash.viewItem(this.id).subscribe(data=>{
        this.items = data;
    });
  }
  edit(itemId:number){
    this.router.navigate(['/vendor-update-item',itemId,this.id,this.name]);
    // this.router.navigate([ '/update-item',item]);
  }
  // updateItem(){
  //   this.vendorDash.updateItem(this.itemUpdate).subscribe(data=>{
  //     if(data!=null){
  //         this.getAllItems();
  //     }
  //   });
  // }
  deleteItem(itemId:number){
    this.vendorDash.deleteItem(itemId);
    this.getAllItems();
  }

}

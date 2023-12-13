import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/Classes/item';
import { VendorDashboardService } from 'src/app/Services/vendor-dashboard.service';

@Component({
  selector: 'app-vendor-update-item',
  templateUrl: './vendor-update-item.component.html',
  styleUrls: ['./vendor-update-item.component.css']
})
export class VendorUpdateItemComponent implements OnInit {

  itemUpdate:Item = new Item();
  // displayItem:Item = new Item();
  constructor(private vendorDash:VendorDashboardService, private router:Router,private route:ActivatedRoute) { }

  name = '';
  id = '';
  itemId = '';
  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('itemId') as string;
    this.id = this.route.snapshot.paramMap.get('vendorId') as string;
    this.name = this.route.snapshot.paramMap.get('vendorName') as string;
    // this.itemUpdate.vendorId = parseInt(this.id);

    this.vendorDash.viewItemById(this.itemId).subscribe(data => {
      this.itemUpdate = data;
    });
  }

  updateItem(){
    this.vendorDash.addItem(this.itemUpdate).subscribe(data => {
      if(data!=null){
        alert("Item Updated successfully !");
      }else{
        alert("Error Occured while updating item !!!")
      }
    });
  }
}

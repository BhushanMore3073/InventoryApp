import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/Classes/item';
import { VendorDashboardService } from 'src/app/Services/vendor-dashboard.service';

@Component({
  selector: 'app-vendor-add-item',
  templateUrl: './vendor-add-item.component.html',
  styleUrls: ['./vendor-add-item.component.css']
})
export class VendorAddItemComponent implements OnInit {

  item:Item = new Item();
  displayItem:Item = new Item();
  constructor(private vendorDash:VendorDashboardService, private router:Router,private route:ActivatedRoute) { }

  name = '';
  id = '';
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('vendorId') as string;
    this.name = this.route.snapshot.paramMap.get('vendorName') as string;
    this.item.vendorId = parseInt(this.id);
  }
  addItem(){
    this.vendorDash.addItem(this.item).subscribe(data=>{
        if(data!=null){
          alert("added successfully !");
          this.router.navigate(['/vendor-dashboard',this.name,this.id]);
        }
        else{
          alert("operation failed !");
        }
    });
  }

}

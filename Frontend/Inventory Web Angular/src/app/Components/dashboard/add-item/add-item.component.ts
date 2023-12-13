import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/Classes/item';
import { AdminDashboardService } from 'src/app/Services/admin-dashboard.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item:Item = new Item();
  displayItem:Item = new Item();
  constructor(private adminDash:AdminDashboardService, private router:Router,private route:ActivatedRoute) { }
  adminname = '';
  ngOnInit(): void {
    this.adminname = this.route.snapshot.paramMap.get('name') as string;
  }
  addItem(){
    this.adminDash.addItem(this.item).subscribe(data=>{
        if(data!=null){
          alert("added successfully !");
          this.router.navigate(['/admin-dashboard',this.adminname]);
        }
        else{
          alert("operation failed !");
        }
    });
  }
}

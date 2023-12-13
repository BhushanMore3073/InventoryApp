import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() custName='';
  @Input() custId = ''
  id = '';
  name = '';
  ngOnInit(): void {
    this.id = this.custId;
    this.name = this.custName;
  }
  goToProfile(){
    console.log(this.id+" from customer header going to profile");
    this.router.navigate(['/customer-profile',this.id]);
  }
}

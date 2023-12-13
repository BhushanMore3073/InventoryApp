import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-navbar',
  templateUrl: './second-navbar.component.html',
  styleUrls: ['./second-navbar.component.css']
})
export class SecondNavbarComponent implements OnInit {
  
  check:boolean = true;
  constructor() {
   }

  ngOnInit(): void {
  }
}

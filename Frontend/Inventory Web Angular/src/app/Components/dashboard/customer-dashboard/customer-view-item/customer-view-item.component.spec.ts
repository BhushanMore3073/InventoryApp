import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewItemComponent } from './customer-view-item.component';

describe('CustomerViewItemComponent', () => {
  let component: CustomerViewItemComponent;
  let fixture: ComponentFixture<CustomerViewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

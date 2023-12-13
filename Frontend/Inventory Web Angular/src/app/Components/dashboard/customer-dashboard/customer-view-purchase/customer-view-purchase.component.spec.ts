import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewPurchaseComponent } from './customer-view-purchase.component';

describe('CustomerViewPurchaseComponent', () => {
  let component: CustomerViewPurchaseComponent;
  let fixture: ComponentFixture<CustomerViewPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

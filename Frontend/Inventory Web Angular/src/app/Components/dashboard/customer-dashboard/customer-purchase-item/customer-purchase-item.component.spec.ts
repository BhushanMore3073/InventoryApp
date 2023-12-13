import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPurchaseItemComponent } from './customer-purchase-item.component';

describe('CustomerPurchaseItemComponent', () => {
  let component: CustomerPurchaseItemComponent;
  let fixture: ComponentFixture<CustomerPurchaseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPurchaseItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPurchaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

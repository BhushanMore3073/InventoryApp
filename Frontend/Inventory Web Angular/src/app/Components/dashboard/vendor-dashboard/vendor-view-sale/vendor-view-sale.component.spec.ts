import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorViewSaleComponent } from './vendor-view-sale.component';

describe('VendorViewSaleComponent', () => {
  let component: VendorViewSaleComponent;
  let fixture: ComponentFixture<VendorViewSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorViewSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorViewSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

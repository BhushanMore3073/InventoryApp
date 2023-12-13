import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSaleHistoryComponent } from './vendor-sale-history.component';

describe('VendorSaleHistoryComponent', () => {
  let component: VendorSaleHistoryComponent;
  let fixture: ComponentFixture<VendorSaleHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorSaleHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSaleHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewPurchaseComponent } from './admin-view-purchase.component';

describe('AdminViewPurchaseComponent', () => {
  let component: AdminViewPurchaseComponent;
  let fixture: ComponentFixture<AdminViewPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

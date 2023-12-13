import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPurchaseComponent } from './admin-purchase.component';

describe('AdminPurchaseComponent', () => {
  let component: AdminPurchaseComponent;
  let fixture: ComponentFixture<AdminPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

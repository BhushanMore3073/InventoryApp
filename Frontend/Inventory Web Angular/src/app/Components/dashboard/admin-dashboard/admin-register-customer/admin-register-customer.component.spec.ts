import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterCustomerComponent } from './admin-register-customer.component';

describe('AdminRegisterCustomerComponent', () => {
  let component: AdminRegisterCustomerComponent;
  let fixture: ComponentFixture<AdminRegisterCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegisterCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegisterCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

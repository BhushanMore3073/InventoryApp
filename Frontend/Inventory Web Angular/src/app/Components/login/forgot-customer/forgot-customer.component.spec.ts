import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotCustomerComponent } from './forgot-customer.component';

describe('ForgotCustomerComponent', () => {
  let component: ForgotCustomerComponent;
  let fixture: ComponentFixture<ForgotCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

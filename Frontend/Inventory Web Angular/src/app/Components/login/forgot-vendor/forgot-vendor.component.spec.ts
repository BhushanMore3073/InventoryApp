import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotVendorComponent } from './forgot-vendor.component';

describe('ForgotVendorComponent', () => {
  let component: ForgotVendorComponent;
  let fixture: ComponentFixture<ForgotVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

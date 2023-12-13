import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerConfirmPageComponent } from './customer-confirm-page.component';

describe('CustomerConfirmPageComponent', () => {
  let component: CustomerConfirmPageComponent;
  let fixture: ComponentFixture<CustomerConfirmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerConfirmPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

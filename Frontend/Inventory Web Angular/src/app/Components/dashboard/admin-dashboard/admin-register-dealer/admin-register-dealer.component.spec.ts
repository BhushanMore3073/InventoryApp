import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterDealerComponent } from './admin-register-dealer.component';

describe('AdminRegisterDealerComponent', () => {
  let component: AdminRegisterDealerComponent;
  let fixture: ComponentFixture<AdminRegisterDealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegisterDealerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegisterDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

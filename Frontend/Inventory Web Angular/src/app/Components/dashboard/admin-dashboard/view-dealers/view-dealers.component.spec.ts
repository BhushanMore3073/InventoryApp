import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDealersComponent } from './view-dealers.component';

describe('ViewDealersComponent', () => {
  let component: ViewDealersComponent;
  let fixture: ComponentFixture<ViewDealersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDealersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

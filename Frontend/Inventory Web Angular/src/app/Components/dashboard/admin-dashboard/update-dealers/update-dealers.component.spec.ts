import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDealersComponent } from './update-dealers.component';

describe('UpdateDealersComponent', () => {
  let component: UpdateDealersComponent;
  let fixture: ComponentFixture<UpdateDealersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDealersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

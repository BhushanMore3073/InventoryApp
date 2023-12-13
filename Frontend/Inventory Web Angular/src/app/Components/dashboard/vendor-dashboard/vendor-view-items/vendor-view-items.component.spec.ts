import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorViewItemsComponent } from './vendor-view-items.component';

describe('VendorViewItemsComponent', () => {
  let component: VendorViewItemsComponent;
  let fixture: ComponentFixture<VendorViewItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorViewItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorViewItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

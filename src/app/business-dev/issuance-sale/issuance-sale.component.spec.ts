import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuanceSaleComponent } from './issuance-sale.component';

describe('IssuanceSaleComponent', () => {
  let component: IssuanceSaleComponent;
  let fixture: ComponentFixture<IssuanceSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuanceSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuanceSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuanceVolumeComponent } from './issuance-volume.component';

describe('IssuanceVolumeComponent', () => {
  let component: IssuanceVolumeComponent;
  let fixture: ComponentFixture<IssuanceVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuanceVolumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuanceVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

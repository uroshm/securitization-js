import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondDetailComponent } from './bond-detail.component';

describe('BondDetailComponent', () => {
  let component: BondDetailComponent;
  let fixture: ComponentFixture<BondDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BondDetailComponent]
    });
    fixture = TestBed.createComponent(BondDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

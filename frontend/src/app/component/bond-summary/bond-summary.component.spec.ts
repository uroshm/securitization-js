import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondSummaryComponent } from './bond-summary.component';

describe('BondSummaryComponent', () => {
  let component: BondSummaryComponent;
  let fixture: ComponentFixture<BondSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BondSummaryComponent]
    });
    fixture = TestBed.createComponent(BondSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

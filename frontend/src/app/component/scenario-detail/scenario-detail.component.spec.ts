import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScenarioDetailComponent } from "./scenario-detail.component";

describe("ScenarioDetailComponent", () => {
  let component: ScenarioDetailComponent;
  let fixture: ComponentFixture<ScenarioDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScenarioDetailComponent],
    });
    fixture = TestBed.createComponent(ScenarioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

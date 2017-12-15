import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintCockpitComponent } from './sprint-cockpit.component';

describe('SprintCockpitComponent', () => {
  let component: SprintCockpitComponent;
  let fixture: ComponentFixture<SprintCockpitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintCockpitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

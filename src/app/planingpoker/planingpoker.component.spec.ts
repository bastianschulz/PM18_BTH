import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningpokerComponent } from './planingpoker.component';

describe('PlaningpokerComponent', () => {
  let component: PlaningpokerComponent;
  let fixture: ComponentFixture<PlaningpokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaningpokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaningpokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

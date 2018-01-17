import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeltaskComponent } from './seltask.component';

describe('SeltaskComponent', () => {
  let component: SeltaskComponent;
  let fixture: ComponentFixture<SeltaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeltaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeltaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeluserComponent } from './seluser.component';

describe('SeluserComponent', () => {
  let component: SeluserComponent;
  let fixture: ComponentFixture<SeluserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeluserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

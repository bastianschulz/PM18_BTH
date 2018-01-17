import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTusComponent } from './set-tus.component';

describe('SetTusComponent', () => {
  let component: SetTusComponent;
  let fixture: ComponentFixture<SetTusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetTusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

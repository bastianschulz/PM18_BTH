import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksprintComponent } from './tasksprint.component';

describe('TasksprintComponent', () => {
  let component: TasksprintComponent;
  let fixture: ComponentFixture<TasksprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

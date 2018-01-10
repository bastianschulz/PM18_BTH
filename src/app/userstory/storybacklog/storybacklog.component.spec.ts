import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorybacklogComponent } from './storybacklog.component';

describe('StorybacklogComponent', () => {
  let component: StorybacklogComponent;
  let fixture: ComponentFixture<StorybacklogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorybacklogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorybacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

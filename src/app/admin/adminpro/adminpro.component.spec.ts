import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproComponent } from './adminpro.component';

describe('AdminproComponent', () => {
  let component: AdminproComponent;
  let fixture: ComponentFixture<AdminproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

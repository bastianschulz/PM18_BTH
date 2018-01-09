import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpronewComponent } from './adminpronew.component';

describe('AdminpronewComponent', () => {
  let component: AdminpronewComponent;
  let fixture: ComponentFixture<AdminpronewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpronewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpronewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

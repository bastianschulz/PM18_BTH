import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminredoComponent } from './adminredo.component';

describe('AdminredoComponent', () => {
  let component: AdminredoComponent;
  let fixture: ComponentFixture<AdminredoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminredoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminredoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

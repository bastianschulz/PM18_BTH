import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminusernewComponent } from './adminusernew.component';

describe('AdminusernewComponent', () => {
  let component: AdminusernewComponent;
  let fixture: ComponentFixture<AdminusernewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminusernewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminusernewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

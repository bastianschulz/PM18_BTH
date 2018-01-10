import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserstoryComponent } from './adduserstory.component';

describe('AdduserstoryComponent', () => {
  let component: AdduserstoryComponent;
  let fixture: ComponentFixture<AdduserstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduserstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

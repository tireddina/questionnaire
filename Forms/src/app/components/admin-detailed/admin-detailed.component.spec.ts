import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailedComponent } from './admin-detailed.component';

describe('AdminDetailedComponent', () => {
  let component: AdminDetailedComponent;
  let fixture: ComponentFixture<AdminDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

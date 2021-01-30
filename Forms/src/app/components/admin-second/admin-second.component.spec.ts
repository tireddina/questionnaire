import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSecondComponent } from './admin-second.component';

describe('AdminSecondComponent', () => {
  let component: AdminSecondComponent;
  let fixture: ComponentFixture<AdminSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

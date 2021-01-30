import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminThirdComponent } from './admin-third.component';

describe('AdminThirdComponent', () => {
  let component: AdminThirdComponent;
  let fixture: ComponentFixture<AdminThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

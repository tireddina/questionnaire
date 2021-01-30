import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFirstComponent } from './admin-first.component';

describe('AdminFirstComponent', () => {
  let component: AdminFirstComponent;
  let fixture: ComponentFixture<AdminFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

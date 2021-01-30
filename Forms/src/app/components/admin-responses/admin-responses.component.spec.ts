import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResponsesComponent } from './admin-responses.component';

describe('AdminResponsesComponent', () => {
  let component: AdminResponsesComponent;
  let fixture: ComponentFixture<AdminResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminResponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

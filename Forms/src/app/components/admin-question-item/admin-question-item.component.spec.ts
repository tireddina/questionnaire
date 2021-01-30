import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuestionItemComponent } from './admin-question-item.component';

describe('AdminQuestionItemComponent', () => {
  let component: AdminQuestionItemComponent;
  let fixture: ComponentFixture<AdminQuestionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuestionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuestionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

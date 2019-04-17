import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQuesDispComponent } from './student-ques-disp.component';

describe('StudentQuesDispComponent', () => {
  let component: StudentQuesDispComponent;
  let fixture: ComponentFixture<StudentQuesDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentQuesDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentQuesDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

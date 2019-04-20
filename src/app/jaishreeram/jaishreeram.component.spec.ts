import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaishreeramComponent } from './jaishreeram.component';

describe('JaishreeramComponent', () => {
  let component: JaishreeramComponent;
  let fixture: ComponentFixture<JaishreeramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaishreeramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaishreeramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

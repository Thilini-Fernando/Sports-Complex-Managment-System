import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpoyeesComponent } from './view-empoyees.component';

describe('ViewEmpoyeesComponent', () => {
  let component: ViewEmpoyeesComponent;
  let fixture: ComponentFixture<ViewEmpoyeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmpoyeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpoyeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

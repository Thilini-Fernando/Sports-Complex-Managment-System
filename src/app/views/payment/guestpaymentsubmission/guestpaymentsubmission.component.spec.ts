import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestpaymentsubmissionComponent } from './guestpaymentsubmission.component';

describe('GuestpaymentsubmissionComponent', () => {
  let component: GuestpaymentsubmissionComponent;
  let fixture: ComponentFixture<GuestpaymentsubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestpaymentsubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestpaymentsubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSubmissionComponent } from './payment-submission.component';

describe('PaymentSubmissionComponent', () => {
  let component: PaymentSubmissionComponent;
  let fixture: ComponentFixture<PaymentSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

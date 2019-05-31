import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPurchasesComponent } from './reports-purchases.component';

describe('ReportsPurchasesComponent', () => {
  let component: ReportsPurchasesComponent;
  let fixture: ComponentFixture<ReportsPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

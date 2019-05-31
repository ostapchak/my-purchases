import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPurchasesPageComponent } from './list-purchases-page.component';

describe('ListPurchasesPageComponent', () => {
  let component: ListPurchasesPageComponent;
  let fixture: ComponentFixture<ListPurchasesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPurchasesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPurchasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

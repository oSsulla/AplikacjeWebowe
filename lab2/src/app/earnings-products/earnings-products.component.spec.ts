import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsProductsComponent } from './earnings-products.component';

describe('EarningsProductsComponent', () => {
  let component: EarningsProductsComponent;
  let fixture: ComponentFixture<EarningsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarningsProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

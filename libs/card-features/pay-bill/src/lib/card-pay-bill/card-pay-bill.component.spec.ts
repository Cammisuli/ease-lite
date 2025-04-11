import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardPayBillComponent } from './card-pay-bill.component';

describe('CardPayBillComponent', () => {
  let component: CardPayBillComponent;
  let fixture: ComponentFixture<CardPayBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPayBillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardPayBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

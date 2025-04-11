import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardAutoPayComponent } from './card-auto-pay.component';

describe('CardAutoPayComponent', () => {
  let component: CardAutoPayComponent;
  let fixture: ComponentFixture<CardAutoPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAutoPayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardAutoPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

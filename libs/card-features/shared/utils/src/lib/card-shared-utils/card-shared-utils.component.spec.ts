import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardSharedUtilsComponent } from './card-shared-utils.component';

describe('CardSharedUtilsComponent', () => {
  let component: CardSharedUtilsComponent;
  let fixture: ComponentFixture<CardSharedUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSharedUtilsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardSharedUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EaseSharedComponentsComponent } from './ease-shared-components.component';

describe('EaseSharedComponentsComponent', () => {
  let component: EaseSharedComponentsComponent;
  let fixture: ComponentFixture<EaseSharedComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EaseSharedComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EaseSharedComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

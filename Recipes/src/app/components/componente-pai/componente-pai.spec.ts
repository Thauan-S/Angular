import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePai } from './componente-pai';

describe('ComponentePai', () => {
  let component: ComponentePai;
  let fixture: ComponentFixture<ComponentePai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentePai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentePai);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

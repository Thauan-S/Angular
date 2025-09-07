import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formbuilder } from './formbuilder';

describe('Formbuilder', () => {
  let component: Formbuilder;
  let fixture: ComponentFixture<Formbuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formbuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formbuilder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

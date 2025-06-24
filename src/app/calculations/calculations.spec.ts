import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculations } from './calculations';

describe('Calculations', () => {
  let component: Calculations;
  let fixture: ComponentFixture<Calculations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calculations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Denom } from './denom';

describe('Denom', () => {
  let component: Denom;
  let fixture: ComponentFixture<Denom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Denom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Denom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

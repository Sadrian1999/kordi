import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lepedo } from './lepedo';

describe('Lepedo', () => {
  let component: Lepedo;
  let fixture: ComponentFixture<Lepedo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lepedo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lepedo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

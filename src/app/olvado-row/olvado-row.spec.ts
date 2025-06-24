import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvadoRow } from './olvado-row';

describe('OlvadoRow', () => {
  let component: OlvadoRow;
  let fixture: ComponentFixture<OlvadoRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlvadoRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlvadoRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

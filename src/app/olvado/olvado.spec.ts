import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Olvado } from './olvado';

describe('Olvado', () => {
  let component: Olvado;
  let fixture: ComponentFixture<Olvado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Olvado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Olvado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

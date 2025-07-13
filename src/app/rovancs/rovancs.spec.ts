import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rovancs } from './rovancs';

describe('Rovancs', () => {
  let component: Rovancs;
  let fixture: ComponentFixture<Rovancs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rovancs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rovancs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

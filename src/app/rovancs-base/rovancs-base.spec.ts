import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RovancsBase } from './rovancs-base';

describe('RovancsBase', () => {
  let component: RovancsBase;
  let fixture: ComponentFixture<RovancsBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RovancsBase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RovancsBase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

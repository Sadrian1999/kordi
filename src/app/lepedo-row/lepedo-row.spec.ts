import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LepedoRow } from './lepedo-row';

describe('LepedoRow', () => {
  let component: LepedoRow;
  let fixture: ComponentFixture<LepedoRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LepedoRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LepedoRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

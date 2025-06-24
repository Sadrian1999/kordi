import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiringItem } from './expiring-item';

describe('ExpiringItem', () => {
  let component: ExpiringItem;
  let fixture: ComponentFixture<ExpiringItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpiringItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpiringItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

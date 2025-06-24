import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiringList } from './expiring-list';

describe('ExpiringList', () => {
  let component: ExpiringList;
  let fixture: ComponentFixture<ExpiringList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpiringList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpiringList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

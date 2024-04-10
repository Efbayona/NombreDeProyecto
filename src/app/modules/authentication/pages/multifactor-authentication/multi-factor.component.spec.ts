import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFactorComponent } from './multi-factor.component';

describe('MultiFactorComponent', () => {
  let component: MultiFactorComponent;
  let fixture: ComponentFixture<MultiFactorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiFactorComponent]
    });
    fixture = TestBed.createComponent(MultiFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

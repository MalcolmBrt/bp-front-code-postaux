import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2Component } from './v2.component';

describe('V2Component', () => {
  let component: V2Component;
  let fixture: ComponentFixture<V2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

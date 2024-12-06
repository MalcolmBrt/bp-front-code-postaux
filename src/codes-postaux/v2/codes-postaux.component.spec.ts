import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesPostauxComponent } from './codes-postaux.component';

describe('CodesPostauxComponent', () => {
  let component: CodesPostauxComponent;
  let fixture: ComponentFixture<CodesPostauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodesPostauxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodesPostauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

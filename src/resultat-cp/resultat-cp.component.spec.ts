import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatCpComponent } from './resultat-cp.component';

describe('ResultatCpComponent', () => {
  let component: ResultatCpComponent;
  let fixture: ComponentFixture<ResultatCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultatCpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

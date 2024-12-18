import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatBpComponent } from './resultat-bp.component';

describe('ResultatBpComponent', () => {
  let component: ResultatBpComponent;
  let fixture: ComponentFixture<ResultatBpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultatBpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatBpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

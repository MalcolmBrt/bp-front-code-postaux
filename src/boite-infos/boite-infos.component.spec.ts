import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteInfosComponent } from './boite-infos.component';

describe('BoiteInfosComponent', () => {
  let component: BoiteInfosComponent;
  let fixture: ComponentFixture<BoiteInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoiteInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoiteInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

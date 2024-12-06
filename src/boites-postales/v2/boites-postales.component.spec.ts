import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoitesPostalesComponent } from './boites-postales.component';

describe('BoitesPostalesComponent', () => {
  let component: BoitesPostalesComponent;
  let fixture: ComponentFixture<BoitesPostalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoitesPostalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoitesPostalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

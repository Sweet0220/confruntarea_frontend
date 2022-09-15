import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbsHelpComponent } from './orbs-help.component';

describe('OrbsHelpComponent', () => {
  let component: OrbsHelpComponent;
  let fixture: ComponentFixture<OrbsHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrbsHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrbsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

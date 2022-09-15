import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanksHelpComponent } from './ranks-help.component';

describe('RanksHelpComponent', () => {
  let component: RanksHelpComponent;
  let fixture: ComponentFixture<RanksHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RanksHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RanksHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

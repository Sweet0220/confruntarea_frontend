import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsHelpComponent } from './champions-help.component';

describe('ChampionsHelpComponent', () => {
  let component: ChampionsHelpComponent;
  let fixture: ComponentFixture<ChampionsHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

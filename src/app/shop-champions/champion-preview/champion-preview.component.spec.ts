import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionPreviewComponent } from './champion-preview.component';

describe('ChampionPreviewComponent', () => {
  let component: ChampionPreviewComponent;
  let fixture: ComponentFixture<ChampionPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

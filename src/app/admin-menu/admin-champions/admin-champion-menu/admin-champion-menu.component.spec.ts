import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChampionMenuComponent } from './admin-champion-menu.component';

describe('AdminChampionMenuComponent', () => {
  let component: AdminChampionMenuComponent;
  let fixture: ComponentFixture<AdminChampionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChampionMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChampionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

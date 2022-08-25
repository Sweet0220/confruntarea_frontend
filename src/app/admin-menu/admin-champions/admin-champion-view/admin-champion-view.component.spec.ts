import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChampionViewComponent } from './admin-champion-view.component';

describe('AdminChampionViewComponent', () => {
  let component: AdminChampionViewComponent;
  let fixture: ComponentFixture<AdminChampionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChampionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChampionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChampionAddComponent } from './admin-champion-add.component';

describe('AdminChampionAddComponent', () => {
  let component: AdminChampionAddComponent;
  let fixture: ComponentFixture<AdminChampionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChampionAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChampionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

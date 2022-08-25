import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChampionsComponent } from './admin-champions.component';

describe('AdminChampionsComponent', () => {
  let component: AdminChampionsComponent;
  let fixture: ComponentFixture<AdminChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChampionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMonstersComponent } from './admin-monsters.component';

describe('AdminMonstersComponent', () => {
  let component: AdminMonstersComponent;
  let fixture: ComponentFixture<AdminMonstersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMonstersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMonstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMonsterMenuComponent } from './admin-monster-menu.component';

describe('AdminMonsterMenuComponent', () => {
  let component: AdminMonsterMenuComponent;
  let fixture: ComponentFixture<AdminMonsterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMonsterMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMonsterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

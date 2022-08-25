import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMonsterAddComponent } from './admin-monster-add.component';

describe('AdminMonsterAddComponent', () => {
  let component: AdminMonsterAddComponent;
  let fixture: ComponentFixture<AdminMonsterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMonsterAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMonsterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

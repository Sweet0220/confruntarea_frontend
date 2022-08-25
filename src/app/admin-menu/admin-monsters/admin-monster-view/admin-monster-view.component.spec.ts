import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMonsterViewComponent } from './admin-monster-view.component';

describe('AdminMonsterViewComponent', () => {
  let component: AdminMonsterViewComponent;
  let fixture: ComponentFixture<AdminMonsterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMonsterViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMonsterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

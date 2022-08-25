import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemMenuComponent } from './admin-item-menu.component';

describe('AdminItemMenuComponent', () => {
  let component: AdminItemMenuComponent;
  let fixture: ComponentFixture<AdminItemMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItemMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminItemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAbilityMenuComponent } from './admin-ability-menu.component';

describe('AdminAbilityMenuComponent', () => {
  let component: AdminAbilityMenuComponent;
  let fixture: ComponentFixture<AdminAbilityMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAbilityMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAbilityMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

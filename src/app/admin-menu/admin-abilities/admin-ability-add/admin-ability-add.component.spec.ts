import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAbilityAddComponent } from './admin-ability-add.component';

describe('AdminAbilityAddComponent', () => {
  let component: AdminAbilityAddComponent;
  let fixture: ComponentFixture<AdminAbilityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAbilityAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAbilityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

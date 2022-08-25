import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAbilityViewComponent } from './admin-ability-view.component';

describe('AdminAbilityViewComponent', () => {
  let component: AdminAbilityViewComponent;
  let fixture: ComponentFixture<AdminAbilityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAbilityViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAbilityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

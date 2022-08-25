import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAbilitiesComponent } from './admin-abilities.component';

describe('AdminAbilitiesComponent', () => {
  let component: AdminAbilitiesComponent;
  let fixture: ComponentFixture<AdminAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAbilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

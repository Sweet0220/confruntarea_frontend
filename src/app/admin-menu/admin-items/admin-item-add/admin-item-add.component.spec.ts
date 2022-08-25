import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemAddComponent } from './admin-item-add.component';

describe('AdminItemAddComponent', () => {
  let component: AdminItemAddComponent;
  let fixture: ComponentFixture<AdminItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItemAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

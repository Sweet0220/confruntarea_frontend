import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemViewComponent } from './admin-item-view.component';

describe('AdminItemViewComponent', () => {
  let component: AdminItemViewComponent;
  let fixture: ComponentFixture<AdminItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItemViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

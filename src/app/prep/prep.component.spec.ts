import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepComponent } from './prep.component';

describe('PrepComponent', () => {
  let component: PrepComponent;
  let fixture: ComponentFixture<PrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

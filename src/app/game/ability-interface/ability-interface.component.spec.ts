import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityInterfaceComponent } from './ability-interface.component';

describe('AbilityInterfaceComponent', () => {
  let component: AbilityInterfaceComponent;
  let fixture: ComponentFixture<AbilityInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackInterfaceComponent } from './attack-interface.component';

describe('AttackInterfaceComponent', () => {
  let component: AttackInterfaceComponent;
  let fixture: ComponentFixture<AttackInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttackInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

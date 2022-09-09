import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterTurnInterfaceComponent } from './monster-turn-interface.component';

describe('MonsterTurnInterfaceComponent', () => {
  let component: MonsterTurnInterfaceComponent;
  let fixture: ComponentFixture<MonsterTurnInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterTurnInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterTurnInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

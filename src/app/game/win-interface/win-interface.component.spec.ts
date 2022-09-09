import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinInterfaceComponent } from './win-interface.component';

describe('WinInterfaceComponent', () => {
  let component: WinInterfaceComponent;
  let fixture: ComponentFixture<WinInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

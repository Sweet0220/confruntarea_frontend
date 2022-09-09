import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoseInterfaceComponent } from './lose-interface.component';

describe('LoseInterfaceComponent', () => {
  let component: LoseInterfaceComponent;
  let fixture: ComponentFixture<LoseInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoseInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoseInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

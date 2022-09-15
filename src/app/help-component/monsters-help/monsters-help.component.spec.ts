import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstersHelpComponent } from './monsters-help.component';

describe('MonstersHelpComponent', () => {
  let component: MonstersHelpComponent;
  let fixture: ComponentFixture<MonstersHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstersHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstersHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

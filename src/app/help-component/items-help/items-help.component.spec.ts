import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsHelpComponent } from './items-help.component';

describe('ItemsHelpComponent', () => {
  let component: ItemsHelpComponent;
  let fixture: ComponentFixture<ItemsHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

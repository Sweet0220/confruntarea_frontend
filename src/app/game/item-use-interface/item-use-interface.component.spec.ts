import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUseInterfaceComponent } from './item-use-interface.component';

describe('ItemUseInterfaceComponent', () => {
  let component: ItemUseInterfaceComponent;
  let fixture: ComponentFixture<ItemUseInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemUseInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemUseInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

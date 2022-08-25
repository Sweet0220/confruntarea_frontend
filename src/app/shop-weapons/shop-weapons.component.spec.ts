import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopWeaponsComponent } from './shop-weapons.component';

describe('ShopWeaponsComponent', () => {
  let component: ShopWeaponsComponent;
  let fixture: ComponentFixture<ShopWeaponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopWeaponsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

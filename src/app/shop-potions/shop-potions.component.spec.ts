import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPotionsComponent } from './shop-potions.component';

describe('ShopPotionsComponent', () => {
  let component: ShopPotionsComponent;
  let fixture: ComponentFixture<ShopPotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopPotionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopPotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

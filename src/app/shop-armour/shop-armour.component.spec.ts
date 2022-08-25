import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopArmourComponent } from './shop-armour.component';

describe('ShopArmourComponent', () => {
  let component: ShopArmourComponent;
  let fixture: ComponentFixture<ShopArmourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopArmourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopArmourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

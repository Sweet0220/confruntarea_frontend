import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopThrowablesComponent } from './shop-throwables.component';

describe('ShopThrowablesComponent', () => {
  let component: ShopThrowablesComponent;
  let fixture: ComponentFixture<ShopThrowablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopThrowablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopThrowablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

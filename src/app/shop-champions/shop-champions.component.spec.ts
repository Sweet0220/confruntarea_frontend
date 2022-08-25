import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopChampionsComponent } from './shop-champions.component';

describe('ShopChampionsComponent', () => {
  let component: ShopChampionsComponent;
  let fixture: ComponentFixture<ShopChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopChampionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

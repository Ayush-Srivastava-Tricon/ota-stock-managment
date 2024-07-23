import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagerComponent } from './stock-manager.component';

describe('StockManagerComponent', () => {
  let component: StockManagerComponent;
  let fixture: ComponentFixture<StockManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

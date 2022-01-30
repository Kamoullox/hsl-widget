import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HslWidgetComponent } from './hsl-widget.component';

describe('HslWidgetComponent', () => {
  let component: HslWidgetComponent;
  let fixture: ComponentFixture<HslWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HslWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HslWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

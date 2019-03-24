import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsiblingComponent } from './leftsibling.component';

describe('LeftsiblingComponent', () => {
  let component: LeftsiblingComponent;
  let fixture: ComponentFixture<LeftsiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftsiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

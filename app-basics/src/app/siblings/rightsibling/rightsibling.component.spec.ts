import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsiblingComponent } from './rightsibling.component';

describe('RightsiblingComponent', () => {
  let component: RightsiblingComponent;
  let fixture: ComponentFixture<RightsiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightsiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

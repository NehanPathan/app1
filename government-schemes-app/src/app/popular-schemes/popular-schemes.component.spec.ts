import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSchemesComponent } from './popular-schemes.component';

describe('PopularSchemesComponent', () => {
  let component: PopularSchemesComponent;
  let fixture: ComponentFixture<PopularSchemesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularSchemesComponent]
    });
    fixture = TestBed.createComponent(PopularSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

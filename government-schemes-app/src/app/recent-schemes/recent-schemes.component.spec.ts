import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSchemesComponent } from './recent-schemes.component';

describe('RecentSchemesComponent', () => {
  let component: RecentSchemesComponent;
  let fixture: ComponentFixture<RecentSchemesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentSchemesComponent]
    });
    fixture = TestBed.createComponent(RecentSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringApiPage1Component } from './spring-api-page1.component';

describe('SpringApiPage1Component', () => {
  let component: SpringApiPage1Component;
  let fixture: ComponentFixture<SpringApiPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringApiPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringApiPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

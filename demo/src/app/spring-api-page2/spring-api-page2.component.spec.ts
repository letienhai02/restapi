import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringApiPage2Component } from './spring-api-page2.component';

describe('SpringApiPage2Component', () => {
  let component: SpringApiPage2Component;
  let fixture: ComponentFixture<SpringApiPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringApiPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringApiPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

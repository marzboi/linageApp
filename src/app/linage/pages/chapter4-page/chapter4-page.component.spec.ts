import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter4PageComponent } from './chapter4-page.component';

describe('Chapter4PageComponent', () => {
  let component: Chapter4PageComponent;
  let fixture: ComponentFixture<Chapter4PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chapter4PageComponent]
    });
    fixture = TestBed.createComponent(Chapter4PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

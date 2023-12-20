import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter6PageComponent } from './chapter6-page.component';

describe('Chapter6PageComponent', () => {
  let component: Chapter6PageComponent;
  let fixture: ComponentFixture<Chapter6PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chapter6PageComponent]
    });
    fixture = TestBed.createComponent(Chapter6PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

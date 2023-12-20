import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter5PageComponent } from './chapter5-page.component';

describe('Chapter5PageComponent', () => {
  let component: Chapter5PageComponent;
  let fixture: ComponentFixture<Chapter5PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chapter5PageComponent]
    });
    fixture = TestBed.createComponent(Chapter5PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

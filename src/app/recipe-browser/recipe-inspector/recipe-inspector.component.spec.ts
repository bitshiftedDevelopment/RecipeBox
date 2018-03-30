import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeInspectorComponent } from './recipe-inspector.component';

describe('RecipeInspectorComponent', () => {
  let component: RecipeInspectorComponent;
  let fixture: ComponentFixture<RecipeInspectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeInspectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

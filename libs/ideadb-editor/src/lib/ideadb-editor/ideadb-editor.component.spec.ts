import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeadbEditorComponent } from './ideadb-editor.component';

describe('IdeadbEditorComponent', () => {
  let component: IdeadbEditorComponent;
  let fixture: ComponentFixture<IdeadbEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeadbEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeadbEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

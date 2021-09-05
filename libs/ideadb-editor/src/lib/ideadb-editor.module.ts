import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeadbEditorComponent } from './ideadb-editor/ideadb-editor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IdeadbEditorComponent],
  exports: [IdeadbEditorComponent],
})
export class IdeadbEditorModule {}

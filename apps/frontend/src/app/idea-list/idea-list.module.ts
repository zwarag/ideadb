import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { IdeaListComponent } from './idea-list.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [IdeaListComponent],
  imports: [CommonModule, MatExpansionModule, MatButtonModule, MatIconModule],
  exports: [IdeaListComponent],
})
export class IdeaListModule {}

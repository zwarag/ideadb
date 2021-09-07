import { EditorComponent } from './editor/editor.component';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: IdeaListComponent,
  },
  {
    path: 'idea',
    component: EditorComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

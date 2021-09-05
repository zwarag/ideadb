import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
} from '@angular/core';
import { Idea } from '@ideadb/interfaces';

@Component({
  selector: 'ideadb-lib-editor',
  templateUrl: './ideadb-editor.component.html',
  styleUrls: ['./ideadb-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdeadbEditorComponent {
  @ViewChild('editor') editor?: HTMLElement;
  @Input() idea?: Idea;
}

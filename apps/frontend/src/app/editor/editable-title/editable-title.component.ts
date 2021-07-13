import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'ideadb-editor-editable-title',
  templateUrl: './editable-title.component.html',
  styleUrls: ['./editable-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditableTitleComponent implements OnInit {
  @Input() title!: string;
  isEditing = false;

  constructor() {}

  ngOnInit(): void {}
}

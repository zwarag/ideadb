import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'ideadb-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class EditorComponent implements OnInit, OnDestroy {
  editor!: Editor;
  toolbar: Toolbar = [
    [
      'bold',
      'italic',
      'underline',
      'code',
      'blockquote',
      'bullet_list',
      'link',
    ],
  ];
  html = '';
  title = 'First Idea';

  @HostBinding('class') classes = 'editor-wrapper';

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.editor = new Editor();

    /* Every time something is changed in the editor,
     * tell the changeDetector to check for changes */
    this.editor.update.subscribe((a) => {
      console.log('a', a);
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  save() {
    console.log('save');
    console.log(this.html);
  }

  cancel() {
    this.html = '';
    this.editor.setContent('');
    console.log('cancel');
  }
}

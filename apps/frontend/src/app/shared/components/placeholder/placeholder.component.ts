import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ideadb-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

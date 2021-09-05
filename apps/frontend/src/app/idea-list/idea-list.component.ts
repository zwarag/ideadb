import { Idea, IdeaList } from '@ideadb/interfaces';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  HostBinding,
} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';

@Component({
  selector: 'ideadb-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdeaListComponent implements OnInit {
  ideas: IdeaList = [
    {
      title: 'First Idea',
      description: 'Desc',
      content: 'Have an Idea',
      createdAt: '1630872522667',
      updatedAt: '1630872522667',
      version: 0,
      tags: [],
    } as Idea,
    {
      title: 'Second Idea',
      description: 'Desc',
      content:
        'Totam soluta est et velit omnis voluptatum optio quidem. Aut explicabo praesentium a. Et doloremque voluptatem nihil dolores iusto aut officiis. Molestias et ipsa architecto aut recusandae iure numquam quo. Dolorem odio molestiae placeat quasi rem at veniam hic. Distinctio ut eaque rerum.',
      createdAt: '1630872522667',
      updatedAt: '1630872522667',
      version: 0,
      tags: [],
    } as Idea,
    {
      title: 'Second Idea',
      description: 'Desc',
      content:
        'Totam soluta est et velit omnis voluptatum optio quidem. Aut explicabo praesentium a. Et doloremque voluptatem nihil dolores iusto aut officiis. Molestias et ipsa architecto aut recusandae iure numquam quo. Dolorem odio molestiae placeat quasi rem at veniam hic. Distinctio ut eaque rerum.',
      createdAt: '1630872522667',
      updatedAt: '1630872522667',
      version: 0,
      tags: [],
    } as Idea,
    {
      title: 'Third Idea',
      description: 'Desc',
      content:
        'Totam soluta est et velit omnis voluptatum optio quidem. Aut explicabo praesentium a. Et doloremque voluptatem nihil dolores iusto aut officiis. Molestias et ipsa architecto aut recusandae iure numquam quo. Dolorem odio molestiae placeat quasi rem at veniam hic. Distinctio ut eaque rerum.',
      createdAt: '1630872522667',
      updatedAt: '1630872522667',
      version: 0,
      tags: [],
    } as Idea,
    {
      title: 'Forth Idea',
      description: 'Desc',
      content:
        'Totam soluta est et velit omnis voluptatum optio quidem. Aut explicabo praesentium a. Et doloremque voluptatem nihil dolores iusto aut officiis. Molestias et ipsa architecto aut recusandae iure numquam quo. Dolorem odio molestiae placeat quasi rem at veniam hic. Distinctio ut eaque rerum.',
      createdAt: '1630872522667',
      updatedAt: '1630872522667',
      version: 0,
      tags: [],
    } as Idea,
    {
      title: 'Fifth Idea',
      description: 'Desc',
      content:
        'Totam soluta est et velit omnis voluptatum optio quidem. Aut explicabo praesentium a. Et doloremque voluptatem nihil dolores iusto aut officiis. Molestias et ipsa architecto aut recusandae iure numquam quo. Dolorem odio molestiae placeat quasi rem at veniam hic. Distinctio ut eaque rerum.',
      createdAt: '1630872522667',
      updatedAt: '1630872522667',
      version: 0,
      tags: [],
    } as Idea,
    {
      title: 'Sixth Idea',
      description: 'Desc',
      content:
        'Totam soluta est et velit omnis voluptatum optio quidem. Aut explicabo praesentium a. Et doloremque voluptatem nihil dolores iusto aut officiis. Molestias et ipsa architecto aut recusandae iure numquam quo. Dolorem odio molestiae placeat quasi rem at veniam hic. Distinctio ut eaque rerum.',
      createdAt: '1630872522667',
      updatedAt: '1630872522667',
      version: 0,
      tags: [],
    } as Idea,
    {
      title: 'Seventh Idea',
      description: 'Desc',
      content:
        'Totam soluta est et velit omnis voluptatum optio quidem. Aut explicabo praesentium a. Et doloremque voluptatem nihil dolores iusto aut officiis. Molestias et ipsa architecto aut recusandae iure numquam quo. Dolorem odio molestiae placeat quasi rem at veniam hic. Distinctio ut eaque rerum.',
      createdAt: '1630872522667',
      updatedAt: '1630872522667',
      version: 0,
      tags: [],
    } as Idea,
    {
      title: 'Eighth Idea',
      description: 'Desc',
      content:
        'Totam soluta est et velit omnis voluptatum optio quidem. Aut explicabo praesentium a. Et doloremque voluptatem nihil dolores iusto aut officiis. Molestias et ipsa architecto aut recusandae iure numquam quo. Dolorem odio molestiae placeat quasi rem at veniam hic. Distinctio ut eaque rerum.',
      createdAt: '1630872522667',
      updatedAt: '1630872522667',
      version: 0,
      tags: [],
    } as Idea,
    {
      title: 'Nineth',
      description: 'Desc',
      content:
        'Totam soluta est et velit omnis voluptatum optio quidem. Aut explicabo praesentium a. Et doloremque voluptatem nihil dolores iusto aut officiis. Molestias et ipsa architecto aut recusandae iure numquam quo. Dolorem odio molestiae placeat quasi rem at veniam hic. Distinctio ut eaque rerum.',
      createdAt: '1630872522667',
      updatedAt: '1630872522667',
      version: 0,
      tags: [],
    } as Idea,
  ] as Idea[];

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @HostBinding('class') classes = 'overflowY';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  delete() {}
  edit() {
    this.router.navigate(['/idea']);
  }
}

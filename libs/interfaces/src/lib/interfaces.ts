export interface Idea {
  title: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  tags: string[];
}

export type IdeaList = Idea[];

export interface Panelable<T> {
  data: T;
  expanded: boolean;
}

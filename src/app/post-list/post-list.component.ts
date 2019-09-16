import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() postListTitle: string;
  @Input() postListContent: string;
  @Input() postListLoveIts: number;
  @Input() postListCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if (this.postListLoveIts > 0) {
      return 'green';
    } else if (this.postListLoveIts < 0) {
      return 'red';
    }
  }

  onLoveIt() {
    this.postListLoveIts++;
  }

  onDontLoveIt() {
    this.postListLoveIts--;
  }
}

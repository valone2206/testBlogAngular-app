import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';
  posts = [
    {
      title: 'Mon Premier Post',
      content: 'Contenu du post 1',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon Deuxieme Post',
      content: 'Contenu du post 2',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon Troisième Post',
      content: 'Contenu du post 3',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Le Dernier Post',
      content: 'Contenu du dernier post',
      loveIts: 0,
      created_at: new Date()
    }
  ];
  postOneTitle = 'Mon Premier Post';
  postOneContent = 'Ullamco officia pariatur proident id in nulla cillum veniam.';
}
